const gradePercent;
const isGradePercentValid = gradePercent >= 0 && gradePercent <= 100;

if (isGradePercentValid) {
    if (gradePercent >= 90) {
        console.log("A");
    }
    else if (gradePercent >= 80) {
        console.log("B");
    }
    else if (gradePercent >= 70) {
        console.log("C");
    }
    else if (gradePercent >= 60) {
        console.log("D");
    }
    else if (gradePercent >= 50) {
        console.log("E");
    }
    else {
        console.log("F");
    }
}
else {
    console.log("Error: please insert a valid grade.")
}