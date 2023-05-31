import Student from "./Student";

const student = new Student('leandro', new Date('1989-02-14'));
student.examsGrades = [1,2,3,4];
console.log(student.examsGrades);
student.assignmentsGrades = [1, 2];
console.log(student.assignmentsGrades);
console.log(student.sumAvgGrade());
console.log(student.sumGrades());
