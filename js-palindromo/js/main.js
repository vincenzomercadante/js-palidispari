// parola inserita dall'utente
const userWord = inserisciParola();
// parola inveritita
const invertedWord = reverseWord(userWord);
// check sulla palindromia
const isPalindrome = palindromeCheck(userWord, invertedWord);
// stampa su pagina
alert("La parola è palindroma: " + isPalindrome);
