// Load saved students or create empty array
let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
    const roll = document.getElementById("roll").value.trim();
    const name = document.getElementById("name").value.trim();
    const marks = document.getElementById("marks").value.trim();

    if (!roll || !name || !marks) {
        alert("⚠️ Please fill all fields.");
        return;
    }

    // Check if the roll already exists
    for (let i = 0; i < students.length; i++) {
        if (students[i].roll == roll) {
            alert("❌ Roll number already exists!");
            return;
        }
    }

    const student = {
        roll: roll,
        name: name,
        marks: marks
    };

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    alert("✅ Student saved successfully!");
    clearForm();
}

function viewData() {
    const searchRoll = document.getElementById("searchRoll").value.trim();
    const resultBox = document.getElementById("result");
    resultBox.innerHTML = "";

    if (!searchRoll) {
        resultBox.innerHTML = "⚠️ Enter a roll number to search.";
        return;
    }

    const found = students.find(s => s.roll == searchRoll);

    if (found) {
        resultBox.innerHTML = `
            <strong>Roll Number:</strong> ${found.roll}<br>
            <strong>Name:</strong> ${found.name}<br>
            <strong>Marks:</strong> ${found.marks} / 100
        `;
    } else {
        resultBox.innerHTML = "❌ Student not found.";
    }
}

function clearForm() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}
