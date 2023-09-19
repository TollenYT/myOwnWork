document.getElementById('sendMailForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create a JSON object
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send the JSON data to the server using fetch
    // fetch('https://myownwork.onrender.com/API/myownwork/sendemail', {
    const response = await fetch('https://myownwork.onrender.com/api/myownwork/sendemail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(response);
    
    if (response.ok == true)
    {

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';    
    }
    else {
        console.log('error getting api')
    }
});