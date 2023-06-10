var player1 = prompt("Enter name of First Player")
document.getElementsByTagName("p")[0].innerHTML = (player1)


var player2 = prompt("Enter name of Second Player")
document.getElementsByTagName("p")[1].innerHTML = (player2)






var randomNumber1 = Math.floor((Math.random()*6)+1)
var randomDiceImage = "dice"+randomNumber1+".png"
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomDiceImage)


var randomNumber2 = Math.floor((Math.random()*6)+1)
var randomDiceImage = "dice"+randomNumber2+".png"
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",randomDiceImage)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = player1+" wins !!!"
    document.querySelector("h1").style.color = "#146C94"

}

if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText =  player2+" wins !!!"
    document.querySelector("h1").style.color = "#19A7CE"
}

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerText = "IZZA DRAWWWW !"
    document.querySelector("h1").style.color = "#606C5D"
}