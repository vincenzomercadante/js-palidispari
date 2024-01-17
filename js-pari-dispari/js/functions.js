/**
 *
 * @return {string} userChoice Scelta di pari o dispari
 *
 *
 */
function userChoices() {
  let userChoice = "";
  while (!userChoice || (userChoice != "pari" && userChoice != "dispari")) {
    userChoice = prompt("Scegli 'pari' o 'dispari' ").toLowerCase();
    console.log(userChoice);
  }
  return userChoice;
}

/**
 *
 * @returns {number} userNumber numero scelto dall'utente
 *
 */
function userNumberChoices() {
  let userNumber = 0;
  while (userNumber > 5 || userNumber < 1) {
    userNumber = parseInt(prompt("Scegli un numero tra 1 e 5 "));
  }
  return userNumber;
}

/**
 *
 * @returns {number} generateNumber numero generato casualmente
 *
 */
function randomNumber() {
  const generateNumber = Math.floor(Math.random() * 5 - 1);
  console.log(generateNumber);
  return generateNumber;
}

/**
 *
 * @param {number} userNumber
 * @param {number} computerNumber
 *
 * @returns {number} sum somma dei due numeri
 *
 */
function sumCalculator(userNumber, computerNumber) {
  const sum = userNumber + computerNumber;
  return sum;
}

/**
 *
 * @param {string} userChoice
 * @param {number} sum
 *
 * @returns {string} winner nome vincitore
 *
 */
function winnerCheck(userChoice, sum) {
  let winner;
  if (
    (userChoice === "pari" && sum % 2 == 0) ||
    (userChoice === "dispari" && sum % 2 != 0)
  ) {
    winner = "USER";
  } else {
    winner = "COMPUTER";
  }
  return winner;
}
