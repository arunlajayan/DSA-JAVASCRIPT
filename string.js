/* let str = "hello world";

function reverse(str){
return str.split("").reverse().join("")
}
console.log(vowels(str))

function palindrome(str){
const word = reverse(str).toLowerCase()
 if(str.toLowerCase() === word){
 return true
 }
 return false
}

function vowels(str){
let vowelArr = ['a','e','i','o','u']
let count = 0;
 for(let i of str){
 if(vowelArr.includes(i)){
 console.log(i)
 count++
 }
 }
 return count;
} */

/* function findSingular(str){
let countWord = {}
for(let char of str){
console.log(countWord)
countWord[char] = (countWord[char] || 0)+1
}
for(let char of str){
if(countWord[char] ===1){
return char
}
}

return null
}
console.log(findSingular("annauss")); */

/* function areAnagrams(str,str2){
const world =  str.split("").sort().join("")
const world2 =  str2.split("").sort().join("")
 return world == world2
}
console.log(areAnagrams("malayalam", "alamyalam"));  */

function lengthOfLongestSubstring(str){
    let newSet =  new Set();
    let left  = 0;
    let maxLength = 0;
    for(let right=0;right < str.length;right++){
    while(newSet.has(str[right])){
    newSet.delete(str[left]);
    left++
    }
    newSet.add(str[right])
    maxLength = Math.max(maxLength,right-left +1)
    console.log(maxLength,left,right)
    }
    return maxLength
    }
    console.log(lengthOfLongestSubstring("abcabcbb"));
    