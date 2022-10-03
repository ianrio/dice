const dice = document.querySelector(".dice");
const diceButton = document.querySelector(".bttn");

const throwDice = () => {
  const randomValue = Math.floor(Math.random() * 6) + 1;
  dice.textContent = randomValue;
};

diceButton.addEventListener("click", () => throwDice());
