with open("estudantes_notas.txt", "r") as estudantes_notas:
    student_grades = estudantes_notas.read().split("\n")

approved_students = [
    item.split(" ")[0]
    for item in student_grades
    if int(item.split(" ")[1]) >= 6
]

print(approved_students)
