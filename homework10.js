//TASK1

const calculateTotalPrice1 = items => {
    const menu = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }
    let total = 0;

    for(let item in items){
        total += menu[item] * items[item]
    }
    return console.log(total);
}


//TASK2

const calculateTotalPrice2 = items => {
    const menu = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    let total = 0;

    for(let item in items){
        let regularPrice =  menu[item] * items[item]

        if(item === 'Apple'){
            let discount = (Math.floor(items[item] / 2) * menu[item])/2
            total += regularPrice - discount
        }else if(item === 'Mango'){
            let discount = Math.floor(items[item] / 4) * menu[item]
            total += regularPrice - discount
        }
        return console.log(total)
    }

    return console.log(total);
}

//TASK3

function nthWord(str, num){
    if(num > str.split(' ').length){
        return console.log("")
    }else{
        return console.log(str.split(" ")[num - 1])
    }
}

//TASK4

function isAmstrong(number){
    let checker = 0
    let numStr = number.toString()

for(let i = 0; i < numStr.length; i++){
    checker += parseInt(numStr[i]) ** numStr.length 

}
return number === checker
}

console.log(isAmstrong(153))

//TASK5

//TASK6

function doubleOrTriple(array, boolean){
    if(boolean === true){
        for(let i = 0; i < array.length; i++){
            array[i] = array[i] * 2
        }
    }else{
        for(let i = 0; i < array.length; i++){
            array[i] = array[i] * 3 
    }
    
}
console.log(array)
}

doubleOrTriple([1, 5, 10], true)
doubleOrTriple([1, 5, 10], false)

//TASK7

function splitString(string, number){
    if(string.length % number !== 0 && string.length < number){
        return console.log("")
    }else{
        str.slice(0, number) + ' ' + str.slice(number)

    }
}

