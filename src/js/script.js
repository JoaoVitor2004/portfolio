const btnOpen = document.querySelectorAll('.btn-tec')
const btnClose = document.querySelectorAll(".fechar")
const modal = document.querySelectorAll('.modal')
const fade = document.querySelector('#fade')
const form = document.querySelector('#form')
const inputNome = document.querySelector('#nome')
const inputSobrenome = document.querySelector('#sobrenome')
const inputEmail = document.querySelector('#email')
const inputTelefone = document.querySelector('#celular')
const textArea = document.querySelector('#mensagem')

function limparClasse(indice) {
    fade.classList.toggle('hide')
    modal[indice].classList.toggle('hide')
}

btnOpen.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        limparClasse(indice)
    })
})

btnClose.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        limparClasse(indice)
    })
})

function validarEmail(email) {
    const validação = new RegExp(
        /^[a-zA-Z-_]+@[a-zA-Z]+\.+[a-zA-Z]/
    )

    if (validação.test(email)) {
        return true
    }

    return false
}

function showErrorMessage() {
    Toastify({
        text: "This is a toast",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            display: "flex",
            justifyContent: "space-between",
            width: "250px",
            maxWidth: "90%",
            background: "#000",
            color: "#fff"
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

form.addEventListener('submit', (event) => {

    event.preventDefault()

    if (inputNome.value === '' || inputNome.value.length < 4) {
        showErrorMessage()
        return
    }

    if (inputSobrenome.value === '' || inputSobrenome.value.length < 4) {
        showErrorMessage()
        return
    }

    if (!validarEmail(inputEmail.value)) {
        showErrorMessage()
        return
    }

    if (inputTelefone.value === '' || inputTelefone.value.length < 11) {
        showErrorMessage()
        return
    }

    if (textArea.value === '') {
        showErrorMessage()
        return
    }

    alert('Dados enviados')
    form.submit()
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});