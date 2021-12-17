//Write a function findMax that takes three arguments and returns their maximum.
function findMax(x, y, z) {
    let maksimum = Math.max(x, y, z)
    return maksimum;
}

console.log(findMax(66, 39, 1));


//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out the number even or odd.

function evenAndOdds(pozitifTamsayi) {
    if (pozitifTamsayi%2 == 0) {
        return` ${pozitifTamsayi} çift sayıdır.`;

    }else {
        return`${pozitifTamsayi} tek sayıdır.`;
    }
    
}
console.log(evenAndOdds(4))




//Write a function which generates a randomUserIp. Ex: 168.127.25.2

function randomNumber() {
    let number1 = Math.floor(Math.random() * 1000);
    let number2 = Math.floor(Math.random() * 1000);
    let number3 = Math.floor(Math.random() * 1000);
    let number4 = Math.floor(Math.random() * 1000);
    return number1 + "." + number2 + "." + number3 + "." + number4;

    
    
}
console.log(randomNumber())




//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

let isim = prompt("Enter your name ").toLowerCase();
let soyisim = prompt("Enter your last name").toLowerCase();

function fullName(firstName, lastName) {
    return `${firstName} ${lastName} ${firstName.length + lastName.length} Karakter`
}
console.log(fullName(isim, soyisim))

function fullName1(firstName) {
    let sonKarakter = firstName[firstName.length - 1];
    if (sonKarakter == "a") {
        return `${firstName}'dan Sevgilerle`;
    } else if (sonKarakter == "i"){
        return `${firstName}'den Sevgilerle`;
    }else if (sonKarakter == "ş"){
        return `${firstName}'tan Sevgilerle`; 
    } else{
        return `${firstName}'ten Sevgilerle`;
    }
    
}
console.log(fullName1(isim))


