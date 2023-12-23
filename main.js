const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const phrase = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", "A vida trará coisas boas se tiveres paciência.", "A maior de todas as torres começa no solo.", "A juventude não é uma época da vida, é um estado de espírito.", "Siga os bons e aprenda com eles.", "Não importa o tamanho da montanha, ela não pode tapar o sol.", "São os nossos amigos que nos ensinam as mais valiosas lições.", "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.", "O riso é a menor distância entre duas pessoas.", "Quem olha para fora sonha; quem olha para dentro acorda."]


const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")



function handleTryClick(event) {
    event.preventDefault()
    toggleScreen()
    const randomNumber = (Math.round(Math.random() * 10))-1
    document.querySelector(".screen2 .phrase h3").innerHTML = phrase[randomNumber]
}

function handleResetClick() {
    toggleScreen()
    
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

//Eventos

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', handleResetClick)
