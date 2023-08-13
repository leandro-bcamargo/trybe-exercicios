from models.students_model import StudentModel
from flask import Blueprint, render_template, request, redirect, url_for

students_controller = Blueprint(
    "students_controller", __name__, url_prefix="/students"
)


@students_controller.get("/")
def view_students():
    students = StudentModel.find_all()
    students_dict = [student.to_dict() for student in students]
    return render_template("students.html", students=students_dict)


@students_controller.get("/add")
def view_student_form():
    return render_template("add_student.html")


@students_controller.post("/add")
def add_student():
    name = request.form.get("name")
    enrollment = request.form.get("enrollment")
    new_student = {"name": name, "enrollment": enrollment}
    StudentModel(new_student).save()
    return redirect("/students")


@students_controller.get("/edit/<string:enrollment>")
def view_edit_student_form(enrollment):
    student = StudentModel.find_one({"enrollment": enrollment})
    student_dict = student.to_dict()
    return render_template("edit_student.html", student=student_dict)


@students_controller.post("/edit/<string:enrollment>")
def edit_student(enrollment):
    student = StudentModel.find_one({"enrollment": enrollment})
    new_name = request.form.get("name")
    new_enrollment = request.form.get("enrollment")
    student.update({"name": new_name, "enrollment": new_enrollment})
    return redirect("/students")


@students_controller.get("/delete/<string:enrollment>")
def delete_student(enrollment):
    student = StudentModel.find_one({"enrollment": enrollment})
    student.delete()

    return redirect("/students")
