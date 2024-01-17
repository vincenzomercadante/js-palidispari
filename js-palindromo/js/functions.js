/**
 *@returns {string} inputWord Parola Inserita dall'utente
 */

function inserisciParola() {
  let inputWord;
  //   l'utente inserisce la parola fino a quando è vuota
  while (!inputWord) {
    inputWord = prompt("Scrivimi una Parola: Ti dirò se è palindroma");
  }
  return inputWord;
}

/**
 *
 * @param {string} word Parola da invertire
 * @returns {string} invertedWord Parola invertita
 *
 */

function reverseWord(word) {
  let invertedWord = "";
  //   ciclo che mi crea la mia parola invertita
  for (let i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i];
  }
  return invertedWord.toLowerCase();
}

/**
 *
 * @param {string} normalWord Parola normale
 * @param {string} invertedWord Parola invertita
 * @return {boolean} isPalindrome se è palindroma true altrimenti false
 *
 */

function palindromeCheck(normalWord, invertedWord) {
  let invertIndex = invertedWord.length - 1;
  let isPalindrome = true;
  //   ciclo per controllare la corrispondenza delle lettere
  for (let i = 0; i < normalWord.length && isPalindrome; i++) {
    if (normalWord[i] != invertedWord[invertIndex]) isPalindrome = false;
    invertIndex--;
  }
  return isPalindrome;
}
