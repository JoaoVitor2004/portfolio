
const buttonElement = document.querySelectorAll('#btn-tec')
const modal = document.querySelectorAll('#modal')
const fade = document.querySelector('#fade')
const buttonFechar = document.querySelectorAll('#fechar')

function limparClasse(indice) {
    fade.classList.toggle('hide')
    modal[indice].classList.toggle('hide')
}

buttonElement.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        limparClasse(indice)
    })
})

buttonFechar.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        limparClasse(indice)
    })
})

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