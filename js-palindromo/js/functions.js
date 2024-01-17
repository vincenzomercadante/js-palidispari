/**
 * @returns {string} inputWord Parola Inserita dall'utente
 */

function inserisciParola() {
  let inputWord;
  while (typeof inputWord != "string" && !inputWord) {
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
  for (let i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i];
  }
  return invertedWord.toLowerCase();
}

/**
 *
 * @param {string} normalWord Parola normale
 * @param {string} invertedWord Parola invertita
 * @return {boolean} isPalindrome Parola invertita
 *
 */

function palindromeCheck(normalWord, invertedWord) {
  let isPalindrome = true;
  for (let i = 0; i < normalWord.length && isPalindrome; i++) {
    if (normalWord[i] != invertedWord[i]) isPalindrome = false;
  }
  return isPalindrome;
}
