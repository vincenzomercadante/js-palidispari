/**
 * @returns {string} inputWord Parola Inserita dall'utente
 */

function inserisciParola() {
  let inputWord;
  // inserimento input utente
  while (!isNaN(parseInt(inputWord)) || !inputWord) {
    inputWord = prompt("Scrivimi una Parola: Ti dirò se è palindroma").trim()
      .toLowerCase;
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
  for (let i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i];
  }
  return invertedWord;
}

/**
 *
 * @param {string} normalWord Parola normale
 * @param {string} invertedWord Parola invertita
 * @return {boolean} isPalindrome Parola invertita
 *
 */

function palindromeCheck(normalWord, invertedWord) {
  let isPalindrome = normalWord == invertedWord ? true : false;
  return isPalindrome;
}
