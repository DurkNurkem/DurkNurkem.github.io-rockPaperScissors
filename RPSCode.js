
function checkWinner(pPlayer, pComputer)
   {
      if((pPlayer==("rock")&&pComputer==("scissors"))||(pPlayer==("paper")&&pComputer==("rock"))||(pPlayer==("scissors")&&pComputer==("paper")))
      {
         return "You have won!";
      }
      else if((pComputer==("rock")&&pPlayer==("scissors"))||(pComputer==("paper")&&pPlayer==("rock"))||(pComputer==("scissors")&&pPlayer==("paper")))
      {
         return "You have lost!";
      }
      else 
	  {
	  return "It's a draw!";
	  }
   }
   
function computerChoice(pComChoice)
{
      switch (pComChoice)
      {
         case 1: return "rock";
         case 2: return "paper";
         case 3: return "scissors";
		/*default: return "no choice";*/
	  }
}

function mainFunc(buttonChoice)
{
	var pChoice = buttonChoice;
	var max = 3, min = 1, range = (max - min + 1);
	var cChoice = computerChoice(Math.floor(Math.random() * range) + min);
	var result = checkWinner(pChoice, cChoice);
	
	
	var main=document.getElementById("mainBox");
	var outcome=document.createElement("p");
	
	main.appendChild(outcome);

	var choiceText=document.createTextNode("Player chose: "+pChoice+" ••• Computer chose: "+cChoice+" ••• Result: "+result);
	
	outcome.appendChild(choiceText);
	alert(result);
}

   



