const usuarios = document.getElementById("listaUsuarios")


fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error connection !");
        }
        return response.json();
    })
    .then((data) => {

        for (let i = 0; i < data.length; i++) {
            const nombres = (data.map(element => element.name))
            const usernames = (data.map(element => element.username))
            const telefonos = (data.map(element => element.phone))
            const email = (data.map(element => element.email))
            const compañia = (data.map(element => element.company.name))
            const fotos = data.map(element => element.id)
            const street = data.map(element => element.address.street)
            const suite = data.map(element => element.address.suite)
            const city = data.map(element => element.address.city)
            const direccion = { street, suite, city }
            const edad = (parseInt(Math.random() * (69 - 18) + 18))

            usuarios.innerHTML += `<section id ="usuarios"> 

    <div class ="fotos"> <img  src= assets/img/${fotos[i]}.jpeg></div>
    <div id ="datos"><li><strong>Nombre:</strong> ${nombres[i]}</li>
    <li><strong>Edad:</strong> ${edad}</li>  
    <li><strong>Usernames:</strong> ${usernames[i]}</li> <li><strong>Telefonos:</strong> ${telefonos[i]}</li>
    <li><strong>Email:</strong> ${email[i]}</li></div>
    <div class = "datos2"><li><strong>Compañia:</strong> ${compañia[i]}
     </li> <strong><li>Dirección </strong>: ${street[i]},${suite[i]},${city[i]}</li></div></section>
`

        }
    });




