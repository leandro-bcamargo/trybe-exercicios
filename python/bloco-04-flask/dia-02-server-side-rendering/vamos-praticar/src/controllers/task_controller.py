from flask import Blueprint, render_template, request
from models.task_model import Task, tasks

task_controller = Blueprint("task_controller", __name__)


@task_controller.route("/", methods=["GET", "POST"])
def tasks_view():
    if request.method == "POST":
        title = request.form["title"]
        new_task = Task(len(tasks) + 1, title)
        tasks.append(new_task)

    return render_template("tasks.html", tasks=tasks)


@task_controller.route("/complete/<int:id>", methods=["GET"])
def complete_task(id):
    for task in tasks:
        if task.id == id:
            task.completed = True

    return render_template("tasks.html", tasks=tasks)
