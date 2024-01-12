const form = document.querySelector("form");
form.addEventListener("submit",function handleFormSubmit(event){
  
  event.preventDefault();
  
  const nameToAdd = document.getElementById('user-name');
  localStorage.setItem("Name", nameToAdd.value);
  console.log(nameToAdd.value);

  const emailToAdd = document.getElementById('e-mail');
  localStorage.setItem("Email", emailToAdd.value);
  console.log(emailToAdd.value);

  const phoneToAdd = document.getElementById("phone");
  localStorage.setItem("Phone", phoneToAdd.value);
  console.log(phoneToAdd.value);
});