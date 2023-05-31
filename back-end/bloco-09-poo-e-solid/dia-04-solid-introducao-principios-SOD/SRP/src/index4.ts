export type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
}

export type Student = {
  name: string;
  disciplines: Discipline[];
  school?: string;
}

export const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.5],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

export const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }

  return 'F';
};

export const getLetterGrades = (discipline: Discipline): Discipline => {
  const { grade } = discipline;
  const letterGrade = getGradeLetter(grade);
  return { ...discipline, letterGrade };
};

export const percentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades),
});

// export const approvedStudents = (student: Student):boolean => 
// student.disciplines.every((discipline) => discipline.grade >= 0.7); 

export const approvedStudents = (student: Student):boolean => 
student.disciplines.every((discipline) =>
(student.school === 'Standard' ? discipline.grade >= 0.7 : discipline.grade >= 0.8));

export const updateApprovalData = (student: Student): void => {
  console.log(`A pessoa com nome ${student.name} foi aprovada`);
  
  student.disciplines.forEach((discipline) => {
    console.log(`${discipline.name}: ${discipline.letterGrade}`);
  });
};

export const setApproved = (students: Student[]): void => {
  students.map(percentageGradesIntoLetters).filter(approvedStudents).forEach(updateApprovalData);
};

export const studentsExample = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'portugués', grade: 0.9 },
    ],
  },

  {
    name: 'Albus',
    school: 'Hogwarts',
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

setApproved(studentsExample);