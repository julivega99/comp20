
// Displaying the lotery numbers

var luckyArray = new Array();
fiveLuckyNumbers();

function fiveLuckyNumbers () {
  
  for (var i = 0; i < 5; i++) {
    var min = 1; 
    var max = 48;
    var random = Math.random() * (+max - +min) +min; 
    random = Math.trunc(random);
    luckyArray[i] = random;
  }

  min = 1;
  max = 18
  random = Math.trunc(Math.random() * (+max - +min) +min); 
  luckyArray[5] = random;

  displayArray(luckyArray);
  sortArray(luckyArray);
  displaySArray(luckyArray);

}

function displayArray(array) {
  for (i = 0; i < 6; i++) {
    document.getElementById('n' + (i + 1)).innerHTML = array[i];
  }
}


function sortArray(array) {
  var sortedArray = new Array();
  var lucky = array[5];
  for (i = 0; i < 5; i++) {
    sortedArray[i] = array[i];
  }
  sortedArray.sort(function(a, b){return a-b});
  sortedArray[5] = lucky;
  luckyArray = sortedArray;
  return sortedArray;
}

function displaySArray(array) {
  for (i = 0; i < 6; i++) {
    document.getElementById('sn' + (i + 1)).innerHTML = array[i];
  }
}

// Parsing the input

function parseInput() {
    var inputLucky = parseInt(document.getElementById('luckyNum').value);
    var inputArray = (document.getElementById('normNums').value).split(" ");
    for (i = 0; i < 5; i++ ){
      inputArray[i] = parseInt(inputArray[i]);
    }
    var winningMessage = match(inputArray, inputLucky);
    document.getElementById('won').innerHTML = winningMessage;

}
function match (inputArray, inputLucky) {
   var lucky = luckyBall(luckyArray[5], inputLucky);
   var numMatches = findMatches(inputArray);

   if (numMatches == 5) {
     if (lucky) {
        return ("You win $7,000 a week for LIFE!");
      } else {
        return ("You win $25,000 a year for LIFE!");
      }
   } else if (numMatches == 4) {
      if (lucky) {
        return ("You win $5,000");
      } else {
        return ("You win $200");
      }
   } else if (numMatches == 3) {
      if (lucky) {
        return ("You win $150");
      } else {
        return ("You win $20");
      }
   } else if (numMatches == 2) {
      if (lucky) {
        return ("You win $25");
      } else {
        return ("You win $3");
      }
   } else if ((numMatches == 1) && lucky) {
      return ("You win $6");
   } else if (lucky ) {
      return ("You win $4");
   } else {
      return ("No Luck for You :(");
   }
}

function luckyBall(lucky, input) {
  
    if (lucky == input) {
      return true;
    }

    return false;
}

function findMatches (inputArray) {

    var num = 0;

    for (var i = 0; i < 5; i++) {
      if ( inputArray[i] == luckyArray[i]){
        num++;
      }
    }

    return num;
}


// Resetting Input

function resetInput () {
  document.getElementById("normNums").value = "";
  document.getElementById("luckyNum").value = "";
  document.getElementById('won').innerHTML = "";
}




