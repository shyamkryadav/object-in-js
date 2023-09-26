let book = ["Math", "Computer", "Physics", "Bio", "science", "Nepali"];

//  for add the Element
// book.push("Chemistry") // push() mehtod add the value in last position
// book.unshift("English") // unshift() mehtod add the value in first position

// remove the Element
// book.pop() //  remove the last elments form the last postion
// book.shift() //  remove the first  elments form the first postion

// console.log(book) //

// remove the Element form the between or any where
// book.splice(1, 1); // fisr paramenter from where we have to reomve and second parameter say how many item we want to delete

// book=[] // make a empty array
// book.length=0  //make a empty array
// console.log(book.length) // 7 give the toatal lenght of items

// console.log(book.indexOf("bio")) // -1 why bio is not exist due to this case sensitive
// console.log(book.indexOf("Bio")) //  2  Bio  is exists on 2 position of indexs

let Bag = "Book";
// console.log(Array.isArray(Bag)) // false it is not a array

let text = "This is text "; // convet in array
let textArray = text.split(" ");
// let textArray= text.split('s') //[ 'Thi', ' i', ' text ' ]
// console.log(textArray) ///[ 'This', 'is', 'text', '' ]

// convert the array to sentence
// let sentenceArray = book.join(" ");
// let sentenceArray= book.join('-') //Math-Physics-Bio-science-Nepali
// console.log(sentenceArray) // Math Physics Bio science Nepali

// console.log(Array.isArray(book)) //true check the is arrayr or not array

// how to add or concat the two array in js
book2 = ["Ramayan", "MahaBharat", "Geeta", "kuran"];
book3 = ["Nepali", "Matheli", "Tharu"];

let allBook = book.concat(book2, book3);
// console.log(allBook)

// multiDimesnional array
// arra inside array
// let bookWithPage = [
// //0     0       1
//     ["math", "300"],
// //1     0       1
//     ["physics", "500"],
// //2     0       1
//     ["bio", "400"],
// ];


// console.log(bookWithPage[1][1]); 500
// console.log(bookWithPage[1]);  // [ 'physics', '500' ]

// for(let i=0;i < book.length;i++){
//     console.log(`Elemnt ${i} is ${book[i]}`)
// }

// book.forEach(myFu);

// function myFu(value){
//     console.log(value)
// }


// book.forEach(element => {
//     console.log(element)
// });