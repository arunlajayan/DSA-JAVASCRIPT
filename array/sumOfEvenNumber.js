// sum of even number from array
const newArr = data.filter(num => num%2 == 0).reduce((acc,sum)=> acc+sum,0)
console.log(newArr)
