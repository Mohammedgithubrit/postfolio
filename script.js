var firstRandomNum = Math.floor(Math.random()*6) +1;

var firstDiceImageSource = "images/dice" + firstRandomNum + ".png";

document.querySelectorAll("img")[0].setAttribute("src",firstDiceImageSource);

var  secondRandomNum= Math.floor(Math.random()*6) +1;

var  secondDiceImageSource = "images/dice" + secondRandomNum + ".png";

document.querySelectorAll("img")[1].setAttribute("src",secondDiceImageSource);

if (firstRandomNum > secondRandomNum) {

    var must =document.querySelector("h1").innerText="SALMA CHABROS";
 

} else if(secondRandomNum > firstRandomNum) {
    
    document.querySelector('h1').innerHTML=' SMIGU WINS✨';
}else{
    document.querySelector('h1').innerHTML= 'Draw'
}