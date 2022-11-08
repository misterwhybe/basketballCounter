
let homeScore = document.querySelector('.scoreHome');
let awayScore = document.querySelector('.scoreAway');


function addOneHome(){
    counter = parseInt(homeScore.textContent)
    counter +=1
    homeScore.innerHTML = counter
    console.log(homeScore.textContent) 
}
function addTwoHome(){
    counter = parseInt(homeScore.textContent)
    counter +=2
    homeScore.innerHTML = counter
    console.log(homeScore.textContent) 
}
function addThreeHome(){
    counter = parseInt(homeScore.textContent)
    counter +=3
    homeScore.innerHTML = counter
    console.log(homeScore.textContent) 
}
function addOneAway(){
    counter = parseInt(awayScore.textContent)
    counter +=1
    awayScore.innerHTML = counter
}
function addTwoAway(){
    counter = parseInt(awayScore.textContent)
    counter +=2
    awayScore.innerHTML = counter
}
function addThreeAway(){
    counter = parseInt(awayScore.textContent)
    counter +=3
    awayScore.innerHTML = counter
}
function reset(){
    homeScore.innerHTML = 0
    awayScore.innerHTML = 0
}