function calculateGrade() {
    let result = prompt('Enter student marks (between 0 and 100);');
    let mark = Number(result);
    if(isNaN(mark) || mark < 0 || mark > 100) {
        invalidInput("Enter a valid number between 0 and 100.");
        return;
    }
    
    //grade per the marks
    let grade;
    if (mark > 79) {
      grade = 'A';
    } else if (mark >= 60) {
      grade = 'B';
    } else if (mark >= 50) {
      grade = 'C';
    } else if (mark >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
    
    // Display the grade to the user
    console.log(`The student's grade is: ${grade}`);
  }