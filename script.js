// VARIÁVEIS

const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu-mobile')
const cont = document.getElementById('content')

const btn = document.getElementById('input')
const circle = document.getElementById('circle-toogle')

const desc = document.getElementById('description')
const txtdesc = desc.innerText
const mais = document.getElementById('ler-mais')

const inputEmail = document.getElementById('email')
const submitEmail = document.getElementById('submit-email')


// mudar cor do tema -------------------------

btn.addEventListener('click', () => {
    document.body.classList.toggle("dark")
    circle.classList.toggle("translate")
    input.classList.toggle("turn-input")
})

// ativar menu ----------------------------
hamburger.addEventListener('click', ativarmenu)

function ativarmenu(){

    if(menu.style.display == 'none'){
        menu.style.display = 'block'
        cont.style.filter = 'blur(2px)'
        cont.style.background = 'rgba(0,0,0,0.2)'
    }else{
            menu.style.display = 'none'
            cont.style.filter = 'blur(0px)'
            cont.style.background = ''

            cont.addEventListener('click', () => {
                menu.style.display = 'none'
                cont.style.filter = 'blur(0px)'
                cont.style.background = ''
            })
    }

}

//lógica dos botões de ver mais e ver menos ------------------

    if(desc.innerText.length > 265){
        desc.innerHTML = `${desc.innerHTML.slice(0, 265)}...`
        mais.style.display = 'block'
} 
    mais.addEventListener('click', () => {
        if(mais.innerHTML == `Ver Mais`){
            mais.innerHTML = `Ver Menos`
            desc.innerHTML = txtdesc

        }else{
            mais.innerHTML = 'Ver Mais'
            desc.innerHTML = `${desc.innerHTML.slice(0, 265)}...`
        }
    })



// enviar email --------------------------------

submitEmail.addEventListener('click', () =>{
    inputEmail.value = ""
})