const crearCuenta = document.querySelector('#formularioCrearCuenta');

crearCuenta.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const usuario = {
        nombre,
        apellido,
        email,
        password
    }

    const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }

    })


    const data = await response.json()
    alert(data.message);
    window.location.href = '/';

})