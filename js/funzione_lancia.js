function Lancia_dadi()
{
   var dado1 = document.getElementById('Dado1');
   var dado2 = document.getElementById('Dado2');
   angleArray = [[0,0,0],[-310,-362,-38],[-400,-320,-2],[135,-217,-88],[-224,-317,5],[-47,-219,-81],[-133,-360,-53]];

  var suono_dado1 = new Audio("Suoni/rolling_dice.mp3");
  suono_dado1.play();
  dado1.style.animation = "animate 0.4s linear"
  var numero1 = Math.floor(Math.random() * 6)+1;
  dado1.style.transform = "rotateX("+angleArray[numero1][0]+"deg) rotateY("+angleArray[numero1][1]+"deg) rotateZ("+angleArray[numero1][2]+"deg)";
  dado1.style.transition = "1s linear";
  dado1.addEventListener('animationend',function(e)
  {
      dado1.style.animation = '';
  });
  var suono_dado2 = new Audio("Suoni/rolling_dice.mp3"); 
  suono_dado2.play();
  dado2.style.animation = "animate 0.4s linear"
  var numero2 = Math.floor(Math.random() * 6)+1;
  dado2.style.transform = "rotateX("+angleArray[numero2][0]+"deg) rotateY("+angleArray[numero2][1]+"deg) rotateZ("+angleArray[numero2][2]+"deg)";
  dado2.style.transition = "1s linear";
  dado2.addEventListener('animationend',function(e)
  {
       dado2.style.animation = '';
  });
}
/*
function suono_dadi()
{
  var suono_dado = new Audio("Suoni/rolling_dice.mp3"); //creo un oggetto audio
  suono_dado.play();
}
*/
