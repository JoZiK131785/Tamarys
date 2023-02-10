//#region INITIALISATION GENERALE

const main = document.querySelector('#main-panel')

Start()

function Start()
{
    let card = document.createElement('section')
    let cardBtn = document.createElement('button')
    card.classList.add("start-panel", "start-panel-open")
    card.id = ("start-panel")
    cardBtn.id = ("button")
    cardBtn.innerHTML = "START"
    card.appendChild(cardBtn)
    main.appendChild(card)
}

//#endregion


const startPanel = document.querySelector('#start-panel')
const btn = document.querySelector('#button')

btn.addEventListener("click", function () {
    startPanel.classList.toggle("start-panel-open")
    startPanel.classList.toggle("start-panel-hide")
})

/*
//#region ADD CARD * 12 ***START***

let delay = 800;

for (let i = 0; i < 20; i++) {
    let randomClass = "card-"
    delay += 100
    setTimeout(function(){
        
    }, delay);    
}

// #endregion

*/