
const list = document.querySelector('.userDetails');

function handleFormSubmit(event){
    event.preventDefault();

    //printing the entered details on webpage
    const detailsToDisplay = document.createElement('li');
    const nameToDisplay = document.getElementById('username');
    detailsToDisplay.appendChild(document.createTextNode(nameToDisplay.value));
    detailsToDisplay.appendChild(document.createTextNode(" - "));
    const emailToDisplay = document.getElementById('email');
    detailsToDisplay.appendChild(document.createTextNode(emailToDisplay.value));
    detailsToDisplay.appendChild(document.createTextNode(" - "));
    const phoneToDisplay = document.getElementById('phone');
    detailsToDisplay.appendChild(document.createTextNode(phoneToDisplay.value));

    //storing form data in local storage
    const userName = document.getElementById('username');
    const eMailId = document.getElementById('email');
    const phone = document.getElementById('phone');

    const formData = {
        name : userName.value,
        email : eMailId.value,
        number : phone.value
    };
    const storedFormData = JSON.parse(localStorage.getItem(formData.email)) || []; //if the local storage is empty then pass an empty array to the object
    storedFormData.push(formData);
    localStorage.setItem(formData.email, JSON.stringify(storedFormData));

    //creating a delete button
    const deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode("Delete"));
    detailsToDisplay.appendChild(document.createTextNode("        "));
    detailsToDisplay.appendChild(deleteButton);
    deleteButton.className = 'del-btn';
    deleteButton.setAttribute('id', 'delete-button');
    
    //appending the list of details to the unordered list
    list.appendChild(detailsToDisplay);
    
    //creating the delete functionality
list.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.id == ('delete-button')){
        const deleteDetails = event.target.parentElement;
        list.removeChild(deleteDetails);
        localStorage.removeItem(formData.email);
    }
})
}

// //creating the delete functionality
// list.addEventListener('click', function(event){
//     event.preventDefault();
//     if(event.target.classList.contains('del-btn')){
//         const deleteDetails = event.target.parentElement;
//         list.removeChild(deleteDetails);
//     }
// })

