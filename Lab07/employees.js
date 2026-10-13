const fs = require("fs");

// 1. Read the file
const data = fs.readFileSync("employees.json", "utf8");
const employees = JSON.parse(data);

// 2. Display all employees
console.log("All Employees:");
console.log(employees);

// 3. Add a new employee
const newEmployee = {
  id: employees.length + 1,
  name: "Hassan",
  position: "Intern",
  salary: 25000
};
employees.push(newEmployee);

// 4. Write the updated data back to the file
fs.writeFileSync("employees.json", JSON.stringify(employees, null, 2), "utf8");

console.log("New employee added and file updated.");