//TASK1

function makeNegative(number){
    return (0 - Math.abs(number))
} 

console.log(makeNegative(10) )   
console.log(makeNegative( -7))    
console.log(makeNegative( 0) )       
console.log(makeNegative(0.45))

//TASK2

function isSumEvenOrOdd(num1, num2, num3){
    if((num1 + num2 + num3) % 2 === 0){
        return "even"
    }
    return "odd"
}

console.log(isSumEvenOrOdd(0, 1, 4))
console.log(isSumEvenOrOdd(0, -1, -5))
console.log(isSumEvenOrOdd(0, 0, 0))
console.log(isSumEvenOrOdd(7, 1, 9))
console.log(isSumEvenOrOdd(1, 1, 1))

//TASK3

function decimal2(array){
    
    for(let i = 0; i < array.length; i++){
        if(array[i].toString().includes('.')){
            array[i] = array[i].toFixed(2)
        }else{
            return array
        }      
    }
    return array
}

console.log(decimal2([94.356, 8.9752]))
console.log(decimal2([76.62, 128.4, 84]))
console.log(decimal2([20987, 3.53245, 12.345, 32.9]))
console.log(decimal2([]))
console.log(decimal2([4.35623, 8.9742]))

//TASK4

function myPow(num1, num2){
    return (num1**num2)
}

console.log(myPow(3,3))
console.log(myPow(10, 1))
console.log(myPow(100, 0))
console.log(myPow(1, 1))
console.log(myPow(4, 2))
console.log(myPow(0, 0))
console.log(myPow(5, 3))

//TASK5

function findLongestWord(string){
    const arrStr = string.split(" ")
    const sortedStr = arrStr.sort((a,b) => b.length - a.length)
    return sortedStr[0]
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWord("This is a sample string for testing"))
console.log(findLongestWord("One two ten"))
console.log(findLongestWord(""))
console.log(findLongestWord("   "))