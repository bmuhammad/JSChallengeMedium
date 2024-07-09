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

/*function reverseString(str) {
  let result = "";*/
  /* for(let i = 0; i < str.length; ++i){
        result = str[i] + result;
      
    }
*/

 /* for (let i = str.length - 1; i >= 0; --i) {
    result = result + str[i];
  } */

 /* for (let i = str.length - 1; i >= 0; --i) {
    result  += str[i];
  } */

    /* convert string to array*/
  /*  result = str.split('').reverse().join('');
  


  return result;
}

console.log(reverseString("abc"));
console.log(reverseString("David"));
console.log(reverseString("This is cool"));*/

/*function convertToZeros(arr){
/*solution 1 with for loop
for(let i = 0; i < arr.length; ++i)
{
   arr[i] = 0;

}

return arr;*/

/*solution 2 with fill function
return new Array(arr.length).fill(0); */

/*solution 3 with arra.map*/
/*return arr.map(item =>  0); 




}

console.log(convertToZeros([5,100,0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1,2,3,4,5])); */