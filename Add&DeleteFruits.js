// Add the Edit Button:
const li = document.querySelectorAll(".fruit");
for(let i=0; i<li.length; i++){
  const editButton = document.createElement("button");
  const editButtonText = document.createTextNode("Edit");
  editButton.appendChild(editButtonText);
  editButton.className = "edit-btn";
  li[i].appendChild(editButton);
}


// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');
//adding the function to handle event
form.addEventListener('submit', function(event) {
event.preventDefault();

const fruitToAdd = document.getElementById('fruit-to-add');
const newLi= document.createElement('li');
const newLiText = document.createTextNode (fruitToAdd.value);
newLi.appendChild(newLiText);
newLi.className = 'fruit';
  //adding the delete button
const deleteBtn = document.createElement('button');
const deleteBtnText = document.createTextNode('x');
deleteBtn.appendChild(deleteBtnText);
deleteBtn.className = 'delete-btn';
  //adding the delete button whenever any new entry is submitted
newLi.appendChild(deleteBtn);
  //adding the edit button whenever any new entry is submitted
const edit = document.createElement("button");
const editText = document.createTextNode("Edit");
edit.appendChild(editText);
edit.className = "edit-btn";
newLi.appendChild(edit);
  //finally appending the elements to new wntry
fruits.appendChild(newLi);
});

fruits.addEventListener('click', function(event) {
if(event.target.classList.contains('delete-btn')){
const fruitToDelete = event.target.parentElement;
fruits.removeChild (fruitToDelete);
}
});