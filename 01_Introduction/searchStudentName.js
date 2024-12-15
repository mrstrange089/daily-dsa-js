// Create an array of Students and find one of them and display it.
const findStudentName = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      return studentName + " is Present!";
    }
  }

  return studentName + " is not Present!";
};

const studentsData = ["John", "Jane", "Bob", "Alice", "Charlie", "Eva"];

console.log(findStudentName(studentsData, "Tobey"));
