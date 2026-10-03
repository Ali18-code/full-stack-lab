import formatStudent, { getStatus, getDiscount } from "./lab05-helpers.js";

function appendLine(elementId, message) {
  const output = document.getElementById(elementId);
  const line = document.createElement("div");
  line.className = "output-line";
  line.textContent = message;
  output.appendChild(line);
}

// Activity 1 — Spread Operator
const coreCourses = ["Data Structures", "Database Systems", "Operating Systems"];
const electiveCourses = ["Artificial Intelligence", "Cloud Computing", "Cyber Security"];

const combinedCourses = [...coreCourses, ...electiveCourses];
const copiedCourses = [...combinedCourses];
copiedCourses.push("Mobile App Development");

appendLine("spreadOutput", "Original combined array: " + combinedCourses.join(", "));
appendLine("spreadOutput", "Copied array after adding a course: " + copiedCourses.join(", "));

// Activity 2 — Rest Parameters
function calculateAverage(...marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return marks.length === 0 ? 0 : total / marks.length;
}

const averageOfThree = calculateAverage(78, 84, 91);
const averageOfSix = calculateAverage(72, 80, 88, 76, 93, 85);

appendLine("restOutput", "Average of 3 marks: " + averageOfThree.toFixed(2));
appendLine("restOutput", "Average of 6 marks: " + averageOfSix.toFixed(2));

// Activity 3 — Module
const studentCgpa = 3.45;
const semesterFee = 120000;

appendLine("moduleOutput", formatStudent("Ali Muhammad", studentCgpa));
appendLine("moduleOutput", "Status: " + getStatus(studentCgpa));
appendLine(
  "moduleOutput",
  "Discount on fee " + semesterFee + ": " + getDiscount(semesterFee).toFixed(2)
);

// Activity 4 — Callbacks
function processOrder(item, callback) {
  setTimeout(() => {
    callback(`Order for ${item} is ready`);
  }, 2000);
}

appendLine("callbackOutput", "Waiting...");

processOrder("Laptop", (message) => {
  appendLine("callbackOutput", message);
});

// Activity 5 — Promises and Async/Await
function checkFee(amount) {
  return new Promise((resolve, reject) => {
    if (amount >= 50000) {
      resolve("Fee accepted");
    } else {
      reject("Insufficient fee");
    }
  });
}

function testFeeWithPromise(amount, label) {
  checkFee(amount)
    .then((message) => {
      appendLine("promiseOutput", `${label} (${amount}): ${message}`);
    })
    .catch((error) => {
      appendLine("promiseOutput", `${label} (${amount}): ${error}`);
    })
    .finally(() => {
      appendLine("promiseOutput", `${label}: fee check finished`);
    });
}

testFeeWithPromise(60000, "Valid amount");
testFeeWithPromise(30000, "Invalid amount");

async function testFeeWithAsyncAwait(amount, label) {
  try {
    const message = await checkFee(amount);
    appendLine("asyncOutput", `${label} (${amount}): ${message}`);
  } catch (error) {
    appendLine("asyncOutput", `${label} (${amount}): ${error}`);
  } finally {
    appendLine("asyncOutput", `${label}: fee check finished`);
  }
}

async function runAsyncAwaitTests() {
  await testFeeWithAsyncAwait(75000, "Valid amount");
  await testFeeWithAsyncAwait(25000, "Invalid amount");
}

runAsyncAwaitTests();
