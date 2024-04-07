import { Game } from "./game";
import "./style.css";

const battleshipGame = new Game();

battleshipGame.setUpBoards();

const shipDirectionButton = document.getElementById("ship-direction");

shipDirectionButton.addEventListener("click", () => {
  if (shipDirectionButton.textContent == "horizontal") {
    shipDirectionButton.textContent = "vertical";
  } else {
    shipDirectionButton.textContent = "horizontal";
  }
});

computerBoard.allowPlayerToAttackComputer(computerBoardDOM);
