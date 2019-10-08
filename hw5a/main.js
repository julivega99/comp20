function parseNumbers() {
  var n1 = parseInt(document.getElementById('firstNum').value);
  var n2 = parseInt(document.getElementById('secondNum').value);
  displayNums(n1, n2);
  var factors1 = getFactors(n1);
  var factors2 = getFactors(n2);

  var displayFactors1 = showFactors(n1, factors1);
  var displayFactors2 = showFactors(n2, factors2);
  document.getElementById('firstFactors').innerHTML = displayFactors1;
  document.getElementById('secondFactors').innerHTML = displayFactors2;

  var sum1 = addFactors(factors1);
  var sum2 = addFactors(factors2);

  if ((sum1 == n2) & (sum2 == n1)){
    document.getElementById('amicable').innerHTML = "AMICABLE!";
  } else {
    document.getElementById('amicable').innerHTML = "NOT AMICABLE!";
  }


  //var thisArray;
  //thisArray = [1, 2, 3, 4, 5, 6, 7]
  //showFactors( thisArray );
  //var sum = addFactors( thisArray );

  //console.log(getFactors(220));
  //console.log(getFactors(284));

  //console.log(sum);
  // console.log(isFactor( 4, 2 ));
  // console.log(isFactor( 5, 3 ));

}

function displayNums(n1, n2) {

  var nums = n1 + " & " +  n2 + " are... ";
  document.getElementById('intro').innerHTML = nums;

}

function isFactor( num, test ) {
  if (num%test) {
    return false;
  } else {
    return true;
  }
}

function showFactors( num, array ) {
  var arrayString = num + " factors : [ ";
  for (i = 0; i < array.length; i++) {
    arrayString += array[i];
    if ( i != (array.length-1)) {
      arrayString += ", ";
    }
  }
  arrayString += " ]";

  return arrayString;

}

function addFactors ( array ) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function getFactors ( num ) {

  var factors = new Array;

  for ( i = 1; i < num; i ++) {
    if ( isFactor( num, i) ){
      factors.push(i);
    }
  }

  return factors;

}
