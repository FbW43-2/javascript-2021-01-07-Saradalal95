// 1-Palindrome:

function checkPalindrome() {
  let str = document.getElementById("palindrome").value;
  var strReversed = reverseStr(str);
  if (str === strReversed) {
    alert("this word is a palindrome");
  } else alert("This word is not a palindrome!!!");
}
function reverseStr(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var strReversed = reverseArray.join("");
  return strReversed;
}
// 2 - Alphabetic order;
function alphabeticOrder() {
  let str = document.getElementById("order").value;
  var splitStr = str.split("");
  var sortStr = splitStr.sort();
  var orderedStr = sortStr.join("");
  return alert(orderedStr);
}

// 3-Reversed number
function reversedNumber() {
  let number = document.getElementById("reverse-number").value;
  var splitNum = number.split("");
  var reversNum = splitNum.reverse();
  var joinNum = reversNum.join("");
  return alert(joinNum);
}

// 4-Longest word
function longestWord() {
  let text = document.getElementById("longest").value;
  let splitText = text.split(" ");
  let longestWord = "";

  for (i = 0; i < splitText.length; i++) {
    if (splitText[i].length > longestWord.length) {
      longestWord = splitText[i];
    }
  }
  alert(longestWord);
}
// 5-Matching Arrays
function matchArrays() {
  let array1 = document.getElementById("Array1").value;
  let array2 = document.getElementById("Array2").value;
  let matchArray = [];
  firstArray = array1.split(",");
  secondArray = array2.split(",");
  for (let x = 0; x < firstArray.length; x++) {
    for (let y = 0; y < secondArray.length; y++) {
      if (firstArray[x] == secondArray[y]) {
        matchArray.push(firstArray[x]);
      }
    }
  }
  return alert(matchArray);
}
// 6-Unique values
function uniqueValues() {
  let string = document.getElementById("Array").value;
  let array = string.split(",");
  let uniqueArray = [];
  for (let x = 0; x < array.length; x++) {
    let counter = 0;
    for (let y = 0; y < array.length; y++) {
      if (array[x] == array[y]) {
        counter++;
      }
    }
    if (counter == 1) {
      uniqueArray.push(array[x]);
    }
  }
  return alert(uniqueArray);
}
// 7- Number to array of digits
function arrayOfDigits() {
  let array = document.getElementById("digitsArray").value;
  let digitsArray = array.split("");
  alert(digitsArray);
}
