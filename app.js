/*
function filterOutFalsy(val1, val2){
   
    return !val1 ? val1: val2;
}

console.log(filterOutFalsy(0,500));

console.log(filterOutFalsy(false,500));
console.log(filterOutFalsy(true,"Dog"));
*/

/* function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([1, 2, 3]));
console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));  */
/*
function arrSum(arr) {
  result = 0;

  for (let i = 0; i < arr.length; ++1) {
    result = result + arr[i];
  }
  return result;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

*/

/* function progressiveSum(num){

   let sum = 0;
    for(let i = 1; i <= num; ++i)
    {
      sum = sum + i;

    }

    return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(4));
console.log(progressiveSum(600)); */

/* function calcTime(seconds) {

    let minutes = Math.floor(seconds/60)
   
    let remainingSeconds = seconds % 60

     if(minutes.toString().length === 1)
     {
        if(remainingSeconds === 0 || remainingSeconds < 10 ){
           remainingSeconds  = '0' + remainingSeconds
        }
 
        minutes = '0' + minutes;
     }

    return minutes + ':' + remainingSeconds;
  

}


console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(300)); */

/*function getMax(arr) {
 
    let max = arr[0];
    for(let i = 1; i < arr.length; ++i){ //dont user 0 for i = 0

        if (arr[i] > max){
            max = arr[i];
        }
    }
        
 
    return max; 


}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200])); */
