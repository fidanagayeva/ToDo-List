const btn = document.querySelector("button");
const list = document.querySelector(".list");

btn.addEventListener("click", append);

function append(e) {
    e.preventDefault();
    const inputValue = document.querySelector("#input").value;

    const listItem = document.createElement("li");
    listItem.className = "list-item";

    const span = document.createElement("span");
    span.textContent = inputValue;

    const div = document.createElement("div");

    const editButton = document.createElement("button");
    editButton.className = "edit btn";
    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square";
    editButton.appendChild(editIcon);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete btn";
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can";
    deleteButton.appendChild(deleteIcon);

    div.appendChild(editButton);
    div.appendChild(deleteButton);

    listItem.appendChild(span);
    listItem.appendChild(div);

    list.appendChild(listItem);

    document.querySelector("#input").value = "";
}

function handleList(e) {
    if (e.target.closest(".delete")) {
        handleDelete(e);
    } else if (e.target.closest(".edit")) {
        handleEdit(e);
    }
}

function handleDelete(e) {
    let listItem = e.target.closest(".list-item");
    listItem.remove();
}

function handleEdit(e) {
    let listItem = e.target.closest(".list-item");
    let span = listItem.querySelector("span");
    let editItem = prompt("Edit Item", span.textContent);
    span.textContent = editItem;
}

list.addEventListener("click", handleList);