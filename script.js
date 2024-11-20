const Username = document.getElementById('User')
const Password = document.getElementById('Pass')
const BotonLogin = document.getElementById('BotonLogin')
const ErrorCredenciales = document.getElementById('ErrorCredenciales')
const ButtonAd = document.getElementById('Close_Ad')
const Anuncio = document.getElementById('ad-banner')
const Formulario = document.getElementById('contenedor')

Formulario.style['display'] = 'none'

const GetDataLogin = () => {
    console.log(Username.value)
    console.log(Password.value)

    if (Username.value === 'admin' && Password.value === 'pass') {
        alert('Credenciales Correctas')
    } else {
        alert("Credenciales erroneas")
    }

}

const CloseAd = () => {

    Anuncio.style['display'] = 'none'
    Formulario.style['display'] = 'flex'

}

BotonLogin.addEventListener('click', GetDataLogin)

ButtonAd.addEventListener('click', CloseAd)