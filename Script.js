function searchStudent() {
    const searchRoll = document.getElementById("searchRoll").value.trim();
    const resultBox = document.getElementById("result");

    if (searchRoll === "") {
        resultBox.innerHTML = "⚠️ Please enter roll number";
        return;
    }

    let foundStudent = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].roll == searchRoll) {   // IMPORTANT: use ==
            foundStudent = students[i];
            break;
        }
    }

    if (foundStudent) {
        resultBox.innerHTML = `
            <p><strong>Roll Number:</strong> ${foundStudent.roll}</p>
            <p><strong>Name:</strong> ${foundStudent.name}</p>
            <p><strong>Marks:</strong> ${foundStudent.marks} / 100</p>
        `;
    } else {
        resultBox.innerHTML = "❌ Student record not found";
    }
}
