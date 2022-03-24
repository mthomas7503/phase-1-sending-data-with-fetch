function submitData(name, email) {return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {'Content-type': 'application/json',
            Accept: 'application/json'},
    body: JSON.stringify({'name': `${name}`, 'email': `${email}`})
    }).then(Response => Response.json()).then(user => console.log(user.id)).catch(function(error) {return alert(error.message)})}

