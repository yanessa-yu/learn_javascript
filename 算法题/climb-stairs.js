function climbStairs(n){
    if(n === 1){
        return 1
    }else if(n ===2){
        return 2
    }else{
        return climbStairs(n-1) + climbStairs(n-2)
    }
}

console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(7))
console.log(climbStairs(8))
console.log(climbStairs(9))
