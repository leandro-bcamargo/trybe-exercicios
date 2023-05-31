type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
}

type Student = {
  name: string;
  disciplines: Discipline[];
}

const percentageGradesIntoLetters = (student: Student):{name: string, disciplines: Discipline[]} => ({
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

function setApproved(students: Student[]) {
  const studentsWithLetterGrade = students.map((student) => {
    const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
      if (discipline.grade >= 0.9) return { ...discipline, letterGrade: 'A' };
      if (discipline.grade >= 0.8) return { ...discipline, letterGrade: 'B' };
      if (discipline.grade >= 0.7) return { ...discipline, letterGrade: 'C' };
      if (discipline.grade >= 0.6) return { ...discipline, letterGrade: 'D' };
      if (discipline.grade >= 0.5) return { ...discipline, letterGrade: 'E' };
      return { ...discipline, letterGrade: 'F' };
    }); 

    return { ...student, disciplines: disciplinesWithLetterGrade };
  });

  const approvedStudents = studentsWithLetterGrade.filter((student) => 
  student.disciplines.every((discipline) => discipline.grade > 0.7));

  approvedStudents.forEach((student) => {
    console.log(`A pessoa com nome ${student.name} foi aprovada!`);
    student.disciplines.forEach((discipline) => {
      console.log(`${discipline.name}: ${discipline.letterGrade}`);
    });
  });
}

const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matematica', grade: 0.8 },
      { name: 'historia', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matematica', grade: 0.8 },
      { name: 'historia', grade: 0.9 },
    ],
  },
];

setApproved(students);
