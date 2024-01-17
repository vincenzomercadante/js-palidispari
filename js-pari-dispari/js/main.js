// scelta utente pari o dispari
const insertedChoice = userChoices();
// numero scelto dall'utente
const insertedNumber = userNumberChoices();
// numero generato
const computerNumber = randomNumber();

// calcolo somma
const sum = sumCalculator(insertedNumber, computerNumber);

// risultato finale
const isWinner = winnerCheck(insertedChoice, sum);
alert("Il vincitore è: " + isWinner);
