const descriptionInput = document.createElement("input");
descriptionInput.type = "text";
descriptionInput.id = "fruit-description";
descriptionInput.placeholder = "Description";

const getForm = document.getElementById("fruit-form");
const addButton = document.querySelector(".add-btn");
getForm.insertBefore(descriptionInput, addButton);

//adding the add functionality
const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitToAdd = document.getElementById("fruit-to-add");

  const newLi = document.createElement("li");
  const fruitName = document.createTextNode(fruitToAdd.value);
  const fruitDescription = document.createElement("p");
  fruitDescription.innerText = descriptionInput.value;
  newLi.appendChild(fruitName);
  newLi.appendChild(fruitDescription);
  newLi.className = "fruit";

  const deleteBtn = document.createElement("button");
  const deleteBtnText = document.createTextNode("x");
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = "delete-btn";

  newLi.appendChild(deleteBtn);
  fruits.appendChild(newLi);
});