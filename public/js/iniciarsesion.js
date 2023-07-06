const formulario = document.querySelector('#formularioInicioSesion')

formulario.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const usuario = {
        email,
        password
    }


    const response = await fetch('/iniciar-sesion/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })

    const data = await response.json()
    alert(data.message);
    if (response.status === 200){
        window.location.href = '/inicio'
    }
})