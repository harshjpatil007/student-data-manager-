const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const roll = document.getElementById("roll").value;
    const name = document.getElementById("name").value;
    const marks = document.getElementById("marks").value;

    const row = table.insertRow();

    row.innerHTML = `
        <td>${roll}</td>
        <td>${name}</td>
        <td>${marks}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    form.reset();
});

function deleteRow(btn) {
    btn.parentElement.parentElement.remove();
}
