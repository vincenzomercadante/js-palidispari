/**
 *
 * @return {string} userChoice user that choose between odd or even
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
 * @returns {number} userNumber number typed by user
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
 * @returns {number} generateNumber number generated randomly
 *
 */
function randomNumber() {
  const generateNumber = Math.floor(Math.random() * 5 - 1);
  return generateNumber;
}

/**
 *
 * @param {number} userNumber
 * @param {number} computerNumber
 *
 * @returns {number} sum of the two numbers
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
 * @returns {string} winner winner's name
 *
 */
function winnerCheck(userChoice, sum) {
  const winner = userChoice === 'pari' && isEven(sum) || userChoice === 'dispari' && !isEven(sum) ? "USER" : "COMPUTER";
  return winner;
}

/**
 * 
 * @param {number} sum sum between the two number
 * @returns true if sum is even otherwise false if is odd
 */
function isEven(sum){
  return sum % 2 == 0
}