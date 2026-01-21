const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

let students = []; // this stores all student data

// Add student
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const roll = document.getElementById("roll").value;
    const name = document.getElementById("name").value;
    const marks = document.getElementById("marks").value;

    // store in array
    students.push({
        roll: roll,
        name: name,
        marks: marks
    });

    // show in table
    const row = table.insertRow();
    row.innerHTML = `
        <td>${roll}</td>
        <td>${name}</td>
        <td>${marks} / 100</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    form.reset();
});

// Delete row
function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
}

// Search student by roll number
function searchStudent() {
    const searchRoll = document.getElementById("searchRoll").value;
    const resultBox = document.getElementById("result");

    let found = false;

    for (let i = 0; i < students.length; i++) {
        if (students[i].roll === searchRoll) {
            resultBox.innerHTML = `
                <p><strong>Roll Number:</strong> ${students[i].roll}</p>
                <p><strong>Name:</strong> ${students[i].name}</p>
                <p><strong>Marks:</strong> ${students[i].marks} / 100</p>
            `;
            found = true;
            break;
        }
    }

    if (!found) {
        resultBox.innerHTML = "❌ Student record not found";
    }
}
