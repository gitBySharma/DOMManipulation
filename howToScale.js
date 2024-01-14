//storing form data in local storage
function handleFormSubmit(event){
    event.preventDefault();

    //printing the entered details on webpage
    const list = document.querySelector('.userDetails')
    const detailsToDisplay = document.createElement('li');

    const nameToDisplay = document.getElementById('username');
    detailsToDisplay.appendChild(document.createTextNode(nameToDisplay.value));
    detailsToDisplay.appendChild(document.createTextNode(" - "));
    const emailToDisplay = document.getElementById('email');
    detailsToDisplay.appendChild(document.createTextNode(emailToDisplay.value));
    detailsToDisplay.appendChild(document.createTextNode(" - "));
    const phoneToDisplay = document.getElementById('phone');
    detailsToDisplay.appendChild(document.createTextNode(phoneToDisplay.value));
    
    list.appendChild(detailsToDisplay);
    

    //storing form data in local storage
    const userName = document.getElementById('username');
    const eMailId = document.getElementById('email');
    const phone = document.getElementById('phone');

    const formData = {
        name : userName.value,
        email : eMailId.value,
        number : phone.value
    };
    const storedFormData = JSON.parse(localStorage.getItem('Form_Data')) || []; //if the local storage is empty then pass an empty array to the object
    storedFormData.push(formData);
    localStorage.setItem(formData.email, JSON.stringify(storedFormData));
}