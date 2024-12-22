//'use strict';
//create new array of 100 element
/* 
const data = Array.from({length:100},(_,i)=> i++)
console.log(data)

// sum of even number from array
const newArr = data.filter(num => num%2 == 0).reduce((acc,sum)=> acc+sum,0)
console.log(newArr)

// reverse the array
let reverseArr  =[]
data.map(num => reverseArr.unshift(num))
console.log(reverseArr)

// reverse a number 
let number = 321;
let data1 = number.toString().split("").reverse().join("")
console.log(parseInt(data1))
*/

// reverse number using loop

/*function reverseNumber(){
let arr = []
const number = 321
let len = arr.length
while(true){
let fraction = number%(10**(arr.length+1))
fraction = parseInt(fraction/(10**arr.length))
let newNum = number-fraction
if(!fraction){
break
}
arr.push((fraction))


}

return arr;
}
const data = reverseNumber()
console.log(parseInt(data.join("")))
*/
 
// palindrome

// function compare(word,newArr){
// const newWord =  newArr.join("")
//     console.log(word,newWord)

//   if(word == newWord){
//     return true
//   }
//   return false
// }

// function palindrome(){
// const word = "malayalam";
// let length = word.length;
// let newArr = []
// let i=0;
// while(true){
// newArr.unshift(word[i])
// i++;
// if(i === length){
// break
// }
// }

// return compare(word,newArr);
// }
// const data = palindrome()
// console.log(data)


// find prime number
/*function findPrime(){
  const number = 41;
  const arr= []
  let i = 2;
  while(true){
    if(number%i ==0){
      arr.push(i)
    }
    i++
    if(i === number){
      break;
    }
    
  }
  if(!(arr.length)){
    return false
  }
  return true
}
const data = findPrime()
console.log(data);*/

// find prime between 1-100
/*  let arr = [2]
  let i = 3;
  while(true){
  const result=findPrime(i)
  if(!result){
    arr.push(i)
  }
    i++
    if(i == 100){
      break;
    }
  }
  return arr
}

function findPrime(number){
  
  const arr= []
  let i = 2;
  while(true){
    if(number%i ==0){
      arr.push(i)
    }
    i++
    if(i === number){
      break;
    }
    
  }
  if(!(arr.length)){
    return false
  }
  return true
}
const result = findOnlyPrimeNumbers()
console.log(result);

//find  largest number in unsorted array

function larestNumber(){
  let arr = [4,2,6,14,12,8];
  let largest = arr[0];
  let i =1;
  while(true){
    if(largest < arr[i]){
      largest = arr[i]
    }
    i++
    if(i == arr.length){
      break;
    }
  }
  console.log(largest)
}
larestNumber()

*/


//find second largest number in unsorted array

/*function SecondLarestNumber(){
  let arr = [1,12,4,2,23,6,14,12,8];
  let largest = -Infinity;;
  let SecondLargest = -Infinity;
  let i =0;
  while(true){
   
    if(arr[i] > largest){
      SecondLargest =largest
      largest =arr[i];
      
    }else if(arr[i] > SecondLargest && arr[i] < largest){
      
      SecondLargest = arr[i]
    }else{
      SecondLargest == null
    }
    
   
    i++
    if(i == arr.length){
      break;
    }
  }
  console.log(SecondLargest,largest)
}
SecondLarestNumber()*/

// filter out duplicate from a unsorted array

/*function findDUplicate(){
  const arr = [2,7,4,7,3,2,9,1];
  let newArr = []
  let i =0;
  while(true){
    if(!newArr.includes(arr[i])){
      newArr.push(arr[i])
    }
    i++
    if(i == arr.length){
      break
    }
    
  }
   return newArr
}
const filterArr = findDUplicate()
console.log(filterArr)
*/

//two sum
/*
function twoSum(){
 let arr = [2, 7, 11, 15]
 let target  = 26;
 let i = 0;
 for(let i=0;i < arr.length;i++){
   for(let j=i+1;j < arr.length;j++){
     console.log("0",i,j)
     if(arr[i]+arr[j] ==target){
       console.log(i,j)
       return i,j
     }
   }
 }
 
}

console.log(twoSum())
*/



// findvowels 
function findVowels(){
  let str = "Hello World"
  let filterVowel = str.toLowerCase().split("").filter(elem => elem == "a" || elem == "e"||elem == "i"||elem == "o"||elem == "u")
  return filterVowel.length,(str.length)- filterVowel.length
  
  
}
console.log(findVowels())
