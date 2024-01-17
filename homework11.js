//TASK1

function countPalindrome(string){
    const arrString = string.toLowerCase().split(' ')
    let num = 0
    for(let i = 0; i < arrString.length; i++){
        if(arrString[i].split('').reverse().join('') == arrString[i]){
            num++
        }
    }
    console.log(num)
}

countPalindrome("Mom and Dad");
countPalindrome("See you at noon");
countPalindrome("Kayak races attracts racecar drivers");
countPalindrome("");
countPalindrome("No palindrome here");

//TASK2

function sum(array, boolean){
    let num = 0
    if(boolean === true){
        for(let i = 0; i < array.length; i+=2){
            num += array[i]
        }
    }else{
        for(let i = 1; i < array.length; i+=2){
            num += array[i]
        }
    }
    console.log(num)
}

sum([1, 5, 10], true);
sum([3, 7, 2, 5, 10], false);
sum([-1, 1, -2, 2], true);
sum([0, -1, 15, 1], false);
sum([1, 2, 3, 4, -4], true);

//TASK3

function nthChars(string, number) {
    const arr = [];
    if(number <= string.length){
        for(let i = number-1; i < string.length; i+=number){
            arr.push(string[i])
        }
    }
    console.log(arr.join(''))
}

nthChars("Java", 2);
nthChars("JavaScript", 5);
nthChars("Java", 3);
nthChars("Hi", 4);
nthChars("0123456789", 2);

//TASK4

function canFormString(str1, str2){
    const lowerstr1 = str1.toLowerCase().split(' ').join('')
    const lowerstr2 = str2.toLowerCase().split(' ').join('')
    const uniqueChars1 = [... new Set(lowerstr1)]
    const uniqueChars2 = [... new Set(lowerstr2)]

    for(let char of uniqueChars2){
        const countOfStr1uniqueletters = lowerstr1.split(char).length 
        const countOfStr2uniqueletters = lowerstr2.split(char).length 
        if(countOfStr2uniqueletters > countOfStr1uniqueletters){
            return false
        }
    }
    if(lowerstr2.length > lowerstr1.length || uniqueChars2.length > uniqueChars1.length){
        return false
    
    }
    return true
}

console.log(canFormString("Hello", "Hi"))
console.log(canFormString("programming", "gaming"))
console.log(canFormString("halogen", "hello"))
console.log(canFormString("CONVERSATION", "voices rant on")) 
console.log(canFormString("12", "123"))


//TASK5 

function isAnagram(str1, str2){
const newStr1 = str1.toLowerCase().split(' ').join('').split('').sort().join('')
const newStr2 = str2.toLowerCase().split(' ').join('').split('').sort().join('')

return newStr1 === newStr2
}

console.log(isAnagram("Apple", "Peach"))
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("astronomer", "moon starer"))
console.log(isAnagram("CINEMA", "iceman")) 
console.log(isAnagram("123", "1234") )


//TASK6

function count(array, boolean){
    let number = 0
    if(boolean === true){
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 === 0){
                number++
            }
        }
    }else{
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 !== 0){
                number++
            }
        }
    }
    return number
}

console.log(count([1, 5, 10], true)) 
console.log(count([3, 7, 2, 5, 10], false))  
console.log(count([-1, 1, -2, 2], true))  
console.log(count([0, -1, 15, 1], false))  
console.log(count([1, 2, 3, 4, -4], true))


//TASK7

function sumDigitsDouble(string){
let num = 0
const arr = string.split('')
for(let i = 0; i < string.length; i++){
    if(arr[i] >= 0 && arr[i] <= 9){
        num += parseInt(arr[i])

    }
}
if(num <= 0){
    return "-1"
}else{
    return (num * 2)
}
}

console.log(sumDigitsDouble("Javascript"))
console.log(sumDigitsDouble("23abc45"))
console.log(sumDigitsDouble("Hi-23"))
console.log(sumDigitsDouble("ab12"))
console.log(sumDigitsDouble("n0numh3r3"))

//TASK8

function countOccurrence(str1, str2){
    const arrStr1 = str1.toLowerCase().split(' ').join('').split('')
    const arrStr2 = str2.toLowerCase().split(' ').join('').split('')
    const counts = []

    for(let chars of arrStr2){
        let number = 0   
            for(let i = 0; i < arrStr1.length; i++){
                if(arrStr1[i] === chars){
                    number++
                }    
            }
            counts.push(number)
    } 
return counts.sort()[0]
}

console.log(countOccurrence("Javascript", "Java"))
console.log(countOccurrence("Hello", "World"))
console.log(countOccurrence("Can I can a can", "anc"))
console.log(countOccurrence("Hello", "l"))
console.log(countOccurrence("IT conversations", "IT") )

