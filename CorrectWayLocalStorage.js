function handleFormSubmit(event) {
    event.preventDefault();
    const userName = document.getElementById('username');
    const eMailId = document.getElementById('email');
    const phoneNo = document.getElementById('phone');
  
    // Create an object to store user details
    const userObject = {
      name: userName.value,
      email: eMailId.value,
      phoneNumber: phoneNo.value,
    };
  
    // Convert the object to a JSON string
    const userObjectStringed = JSON.stringify(userObject);
  
    // Store the JSON string in localStorage with the key "User Details"
    localStorage.setItem("User Details", userObjectStringed);
  
    // Log the JSON string to the console
    console.log(userObjectStringed);
  }