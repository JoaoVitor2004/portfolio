const titulo = document.getElementById('titulo')
const paragrafo = document.getElementById('paragrafo')

const texto = 'Olá meu nome é João Vitor tenho 19 anos sou desenvolvedor web apaixonado por tecnologia, desenvolvo web sites com HTML, CSS, e JAVASCRIPT criando experiências incriveis para os usuarios, sempre aprendendo a melhorar minhas habilidades tecnicas e pessoais'

function digitarTexto() {

    const char = texto.split('').reverse()

    const intervalo = setInterval(() => {

        if(!char.length) {
            return clearInterval(intervalo)
        }

        const next = char.pop()
        paragrafo.innerHTML += next

    }, 30)

}
digitarTexto()