const arr = [2,4,2,3,5,4,3]

function findDup(arr){
let newSet = new Set();

for(let i=0;i <arr.length;i++){
if(!newSet.has(arr[i])){
newSet.add(arr[i])
}
}
return JSON.stringify(newSet);
}
console.log(findDup(arr))

////////////////////////

function findDup(arr){
let newSet = new Set();

for(let i=0;i <arr.length;i++){
if(newSet.has(arr[i]) == -1){
b.push(arr[i])
}
}
return b;
}
///////////////////