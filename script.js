const startAni = document.querySelectorAll(".order")
const startDiv = document.querySelector(".start")
const divMains = document.querySelectorAll(".main")
const divMain = [...divMains]
const orders = [...startAni]
let  status = true;

let num = -1;
function tick() {
    console.log("control")
    if (num==3){
        clearInterval(timer1);
        setTimeout(()=>startDiv.classList= startDiv.classList.value + " fade",3000)       
        setTimeout(()=>{
            startDiv.style.display="none";
            divMain.forEach(element => {
                element.style.display="block";
            });
            texto.textContent="Choice"
        },5000)
    }
    orders[++num].classList="unfade"
}
let timer1 = setInterval(tick,5000);
window.onload = tick()



const firstImg = document.querySelector("img:nth-child(1)")
const secImg = document.querySelector("img:nth-child(2)")
const thirdImg = document.querySelector("img:nth-child(3)")
const imgs = document.querySelectorAll('img')
const header = document.querySelector('#bot')
const img = [...imgs]
const texto = document.querySelector("#result")
const audio = document.getElementById("Audio")
let seleccion = 0


function boingEffect(score) {
if (score < -2){
    document.getElementById('result').classList.toggle("boingDef")
    setTimeout(() => {
        document.getElementById('result').classList.toggle("boingDef")
    }, 75);    
} else if (score > 2){
    document.getElementById('result').classList.toggle("boingVic")
    setTimeout(() => {
        document.getElementById('result').classList.toggle("boingVic")
    }, 75);
} else {
    document.getElementById('result').classList.toggle("boing")
    setTimeout(() => {
        document.getElementById('result').classList.toggle("boing")
    }, 25);
}
}

function computerPlay() {
    let computerDes; 
    let firstVar;
    computerDes = Math.round(Math.random()*2);
    switch (computerDes) {
        case 0: 
            firstVar = 'a';
            break;
        case 1: 
            firstVar = 'b';
            break;
        case 2: 
            firstVar = 'c';
            break;
        default: firstVar = 'something went REALLY wrong';
    }
    return firstVar;
}

function playRound(playerSelection, computerSelection, alpha){
    let result, score;
    
    if(playerSelection == computerSelection) {
        result ="A tie means nothing but failure in war"; score = 0;
    } else if (((playerSelection == 'a') && (computerSelection == 'c'))||((playerSelection == 'b') && (computerSelection == 'a'))||((playerSelection == 'c') && (computerSelection == 'b'))) {
        result ="Another battle have been won"; score = 1;
    } else { result = "Another battle have been lost"; score = -1;}
    boingEffect(alpha+score)
    texto.textContent = result
    return score;
}
let score = 0

function reset () {
    if (status == false) {
        score = 0
        status = true
        
        texto.style.color = 'white'
        document.getElementById('result').classList.toggle("boing")
        texto.textContent="Choice"
        setTimeout(() => {
            document.getElementById('result').classList.toggle("boing")
        }, 25); 
    }
}
function play (a) {
    if (status == true){
        audio.play()
        console.log(score);
        let computerSelection = computerPlay();
        let playerSelection = a;
        score = score + playRound(playerSelection, computerSelection, score)
        if (score < -2){
            texto.style.color = 'red'
            texto.textContent="Return to the Stardust"            
            status = false
            document.querySelectorAll(".img").hover = function(e) { 
                $(this).css("border: 6px solid white") 
            }
        } else if (score > 2){
            texto.style.color = 'green'
            texto.textContent="New lord";
            status = false
            document.querySelectorAll(".img").hover = function(e) { 
                $(this).css("border: 6px solid white") 
            }
        }
    }
    return score;
}