const tecnologias = [
    'java','ruby','html','angular'
]

const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)]

let letrasErradas = []
let letrasCorretas = []

document.addEventListener("keydown", (evento)=>{
    const codigo = evento.keyCode
    if(isLetra(codigo)){
        const letra = evento.key
      
        if(letrasErradas.includes(letra)){
            mostrarAvisoLetraRepetida()
        }else{
            if(palavraSecreta.includes(letra)){
                letrasCorretas.push(letra)
            }else{
                letrasErradas.push(letra)
            }
        }

        atualizarJogo();

    }
})

function atualizarJogo(){
    mostrarLetrasErradas()
}

function mostrarLetrasErradas(){
    const div = document.querySelector('.letras-erradas-container')
    div.innerHTML = '<h3>Letras erradas</h3>'
    letrasErradas.forEach(letra =>{
        div.innerHTML += `<span>${letra}</span>`
    })
}

function mostrarAvisoLetraRepetida(){
    const aviso = document.querySelector('.aviso-palavra-repetida')
    aviso.classList.add('show')
    setTimeout(()=>{
        aviso.classList.remove('show')
    },1000)
}

function isLetra(codigo){
    return codigo >= 65 && codigo <=90
}