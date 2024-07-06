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
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const buttonFechar = document.querySelector('#fechar')
const titleElement = document.querySelector('#title')
const descricaoElement = document.querySelector('#descricao')

function limparClasse() {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

buttonElement[0].addEventListener('click', () => {
    titleElement.innerHTML = 'HTML'
    descricaoElement.innerHTML = 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.'
    limparClasse()
})
buttonElement[1].addEventListener('click', () => {
    titleElement.innerHTML = 'CSS'
    descricaoElement.innerHTML = 'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.'
    limparClasse()
})
buttonElement[2].addEventListener('click', () => {
    titleElement.innerHTML = 'JAVASCRIPT'
    descricaoElement.innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
    limparClasse()
})
buttonElement[3].addEventListener('click', () => {
    titleElement.innerHTML = 'SASS'
    descricaoElement.innerHTML = 'Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.'
    limparClasse()
})
buttonElement[4].addEventListener('click', () => {
    titleElement.innerHTML = 'GIT'
    descricaoElement.innerHTML = 'Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.'
    limparClasse()
})
buttonFechar.addEventListener('click', limparClasse)



const form = document.querySelector('#form')
const inputNome = document.querySelector('#nome')
const inputSobrenome = document.querySelector('#sobrenome')
const inputEmail = document.querySelector('#email')
const inputTelefone = document.querySelector('#celular')
const textArea = document.querySelector('#mensagem')

function validarEmail(email) {
    const validação = new RegExp(
         /^[a-zA-Z-_]+@[a-zA-Z]+\.+[a-zA-z]/
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