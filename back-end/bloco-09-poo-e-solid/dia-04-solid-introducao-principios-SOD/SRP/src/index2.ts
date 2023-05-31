export type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
}

export type Student = {
  name: string;
  disciplines: Discipline[];
}

export const percentageGradesIntoLetters = (student: Student)
:{name: string, disciplines: Discipline[]} => ({
  name: student.name,
  disciplines: student.disciplines.map((discipline) => {
    let letterGrade;

    if (discipline.grade >= 0.9) letterGrade = 'A';
    else if (discipline.grade >= 0.8) letterGrade = 'B';
    else if (discipline.grade >= 0.7) letterGrade = 'C';
    else if (discipline.grade >= 0.6) letterGrade = 'D';
    else if (discipline.grade >= 0.5) letterGrade = 'E';
    else letterGrade = 'F';

    return { name: discipline.name, grade: discipline.grade, letterGrade };
  }),
});

export const approvedStudents = (student: Student):boolean => 
student.disciplines.every((discipline) => discipline.grade >= 0.7); 

export const updateApprovalData = (student: Student): void => {
  console.log(`A pessoa com nome ${student.name} foi aprovada`);
  
  student.disciplines.forEach((discipline) => {
    console.log(`${discipline.name}: ${discipline.letterGrade}`);
  });
};

export const setApproved = (students: Student[]): void => {
  students.map(percentageGradesIntoLetters).filter(approvedStudents).forEach(updateApprovalData);
};