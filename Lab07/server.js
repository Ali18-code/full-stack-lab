const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

let students = JSON.parse(fs.readFileSync("students.json", "utf8"));

// GET all students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// GET students by department (TASK 3)
app.get("/students/department/:department", (req, res) => {
  const dept = req.params.department.toLowerCase();
  const result = students.filter(s => s.department.toLowerCase() === dept);
  res.status(200).json(result);
});

// GET one student
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
});

// POST add student
app.post("/students", (req, res) => {
  // TASK 4: validation
  if (!req.body || !req.body.name || !req.body.department) {
    return res.status(400).json({ message: "name and department are required" });
  }

  const newStudent = {
    id: students[students.length - 1].id + 1,
    name: req.body.name,
    department: req.body.department
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  // TASK 4: validation
  if (!req.body || !req.body.name || !req.body.department) {
    return res.status(400).json({ message: "name and department are required" });
  }

  student.name = req.body.name;
  student.department = req.body.department;
  res.status(200).json(student);
});

// DELETE student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  const deleted = students.splice(index, 1);
  res.status(200).json({ message: "Student deleted successfully", student: deleted[0] });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});