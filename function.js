// two tyoe of function
// 1.pre-define funciton
// alert()
// prompt()
// 2.user define funciton
// add()
// sub()

// function MulTable(mul){
// for (let i = 1; i <= 10; i++) {
//     console.log(`${mul} x ${i}= ${mul * i}`);
//   }
// }
// MulTable(19)

// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(5,5)

function add() {
  if (arguments.length == 0) {
    console.log("No Arguments  is pass ");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  }
}
// add(5, 5, 5, 5);


// let addtioiton =add;
// addtioiton( 146465,654,68,6,645,645,645,849)



// return funciton js  


function add(a,b){
    // return 0;
    return a+b;
}
let c =add(55,5)
// console.log(typeof add())
// console.log(typeof add)


