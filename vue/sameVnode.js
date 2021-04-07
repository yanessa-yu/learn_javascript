let a = [1,2,3]
a.toString = a.shift
console.log(a)
console.log(a == 1)
console.log(a == 2)
console.log(a == 3)