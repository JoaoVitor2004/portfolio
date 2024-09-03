
const buttonElement = document.querySelectorAll('.btn-tec')
const modal = document.querySelectorAll('.modal')
const fade = document.querySelector('#fade')
const buttonFechar = document.querySelectorAll('.fechar')

buttonElement[0].addEventListener('click', () => limparClasse(0))
buttonElement[1].addEventListener('click', () => limparClasse(1))
buttonElement[2].addEventListener('click', () => limparClasse(2))
buttonElement[3].addEventListener('click', () => limparClasse(3))
buttonElement[4].addEventListener('click', () => limparClasse(4))
buttonElement[5].addEventListener('click', () => limparClasse(5))
buttonElement[6].addEventListener('click', () => limparClasse(6))

buttonFechar[0].addEventListener('click', () => limparClasse(0))
buttonFechar[1].addEventListener('click', () => limparClasse(1))
buttonFechar[2].addEventListener('click', () => limparClasse(2))
buttonFechar[3].addEventListener('click', () => limparClasse(3))
buttonFechar[4].addEventListener('click', () => limparClasse(4))
buttonFechar[5].addEventListener('click', () => limparClasse(5))
buttonFechar[6].addEventListener('click', () => limparClasse(6))





const form = document.querySelector('#form')
const inputNome = document.querySelector('#nome')
const inputSobrenome = document.querySelector('#sobrenome')
const inputEmail = document.querySelector('#email')
const inputTelefone = document.querySelector('#celular')
const textArea = document.querySelector('#mensagem')

function validarEmail(email) {
    const validação = new RegExp(
         /^[a-zA-Z-_]+@[a-zA-Z]+\.+[a-zA-Z]/
    )

    if (validação.test(email)) {
        return true
    }
    
    return false
}

form.addEventListener('submit', (event) => {

    event.preventDefault()

    if (inputNome.value === '' || inputNome.value.length < 4) {
        alert('Digite um nome valido')
        return
    }

    if (inputSobrenome.value === '' || inputSobrenome.value.length < 4) {
        alert('Digite um sobrenome valido')
        return
    }

    if (!validarEmail(inputEmail.value)) {
        alert('Digite um email valido')
        return
    }

    if (inputTelefone.value === '' || inputTelefone.value.length < 11) {
        alert('Digite um telefone com apenas números')
        return
    }

    if (textArea.value === '') {
        alert('Digite uma mensagem com apenas letras')
        return
    }

    alert('Dados enviados')
    form.submit()
})