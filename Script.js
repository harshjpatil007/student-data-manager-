function saveStudent() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if (roll === "" || name === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || {};

    students[roll] = {
        name: name,
        marks: marks
    };

    localStorage.setItem("students", JSON.stringify(students));
    alert("Student data saved");

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function viewStudent() {
    let searchRoll = document.getElementById("searchRoll").value;
    let students = JSON.parse(localStorage.getItem("students")) || {};
    let output = document.getElementById("result");

    if (students[searchRoll]) {
        output.innerHTML =
            "Name: " + students[searchRoll].name + "<br>" +
            "Marks: " + students[searchRoll].marks + " / 100";
    } else {
        output.innerHTML = "No record found";
    }
}
