const imagemProjeto = document.getElementById('img-projeto')
const iconAvancar = document.getElementById('avancar')
const iconVoltar = document.getElementById('voltar')

let imagemAtual = 1
let quantidade = 6

function avancarImagem() {
    if (imagemAtual === quantidade) {
        imagemAtual = 1
    } else {
        imagemAtual += 1
    }
    imagemProjeto.src = `src/images/${imagemAtual}.JPG`
}

function voltarImagem() {
    if (imagemAtual === 1) {
        imagemAtual = quantidade
    } else {
        imagemAtual -= 1
    }
    imagemProjeto.src = `src/images/${imagemAtual}.JPG`
}

iconAvancar.addEventListener('click', avancarImagem)
iconVoltar.addEventListener('click', voltarImagem)



const buttonElement = document.querySelectorAll('#btn-tec')
const modal = document.querySelectorAll('#modal')
const fade = document.querySelector('#fade')
const buttonFechar = document.querySelectorAll('#fechar')



function limparClasse0() {
    fade.classList.toggle('hide')
    modal[0].classList.toggle('hide')
}

function limparClasse1() {
    fade.classList.toggle('hide')
    modal[1].classList.toggle('hide')
}

function limparClasse2() {
    fade.classList.toggle('hide')
    modal[2].classList.toggle('hide')
}

function limparClasse3() {
    fade.classList.toggle('hide')
    modal[3].classList.toggle('hide')
}

function limparClasse4() {
    fade.classList.toggle('hide')
    modal[4].classList.toggle('hide')
}

buttonElement[0].addEventListener('click', limparClasse0)
buttonElement[1].addEventListener('click', limparClasse1)
buttonElement[2].addEventListener('click', limparClasse2)
buttonElement[3].addEventListener('click', limparClasse3)
buttonElement[4].addEventListener('click', limparClasse4)
buttonFechar[0].addEventListener('click', limparClasse0)
buttonFechar[1].addEventListener('click', limparClasse1)
buttonFechar[2].addEventListener('click', limparClasse2)
buttonFechar[3].addEventListener('click', limparClasse3)
buttonFechar[4].addEventListener('click', limparClasse4)


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