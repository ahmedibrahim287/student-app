const fs = require('fs');

//add student
const addStudent = (id, name, grades, comment, total) => {
  const students = loadStudents();
  const duplicateTitles = students.filter((student) => {
    return student.id === id;
  });
  if (duplicateTitles.length === 0) {
    students.push({
      id,
      name,
      grades,
      comment,
      total
    });
    saveStudents(students);
    console.log("Saved Successfully");
  } else {
    console.log("Error duplicate title");
  }
};

//delete student
const deleteStudent = (id) => {
  const students = loadStudents();
  const enteredStudent = students.filter((student) => {
    return student.id === id
  })

  const studentsToKeep = students.filter((student) => {
    return student.id !== id
  })

  if (enteredStudent.length === 0) {
    console.log("not fount")
  } else {
    saveStudents(studentsToKeep)
    console.log('removed')
  }
}

//read student
const readStudent = (id) => {
  const students = loadStudents();
  const student = students.find((student) => {
    return student.id === id
  })
  console.log(student)
  if (student) {
    console.log('id number : ' + student.id)
    console.log('student name : ' + student.name)
    console.log('grades : ' + student.grades)
    console.log('comment : ' + student.comment)
    console.log('total : ' + student.total)
  } else {
    console.log('Sorry not found')
  }
}


//list student
const listStudent = () => {
  const students = loadStudents();
  students.forEach((student) => {
    console.log('id number : ' + student.id)
    console.log('student name : ' + student.name)
    console.log('grades : ' + student.grades)
    console.log('comment : ' + student.comment)
  })
}


const loadStudents = () => {
  try {
    const dataBuffer = fs.readFileSync("students.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

const saveStudents = (students) => {
  const saveData = JSON.stringify(students);
  fs.writeFileSync("students.json", saveData);
};


module.exports = {
  addStudent,
  deleteStudent,
  readStudent,
  listStudent
};