function Lancia()
{
  var diceOne = document.getElementsByClassName('img1')[0];
  var diceTwo = document.getElementsByClassName('img2')[0];
  var numero1 = Math.floor(Math.random() * 6)+1;
  var numero2 = Math.floor(Math.random() * 6)+1;

  diceOne.src = "immagini/Dado/dice" + numero1 + ".png";
  diceTwo.src = "immagini/Dado/dice" + numero2 + ".png";
}
