let person={
    name:"shyam",
    age:19,
    mobile:9801622236,
    address:"sarsa",
    country:"Nepal",
    "my location":"janakpur",
    SayHi: function(){
        console.log(" say Hi....")
    },
    time(){
        console.log(new Date())
    }
}
// update the property of object 
person.name="Shyam Yadav";  // update the name value 

// add the new property 
person.role="student";

// delete the poperty of object 
delete person['my location']  


// check the if the property is exists  on not 
// console.log('height' in person) //false 
// console.log('age' in person) //true 

// console.log(person['my location']) //janakpur
// console.log(person.salary) // if porperty is not declared the  on object then relsut is undefined
// console.log(person) // if porperty is not declared the  on object then relsut is undefined

// interate the all property of object 

for(let key in person){
    // console.log(key + " : " + person[key])
} 


// object method or function or  action 

person.SayHello =()=>{
    console.log("Hello !");
}


function greet(){
    console.log("GoodMorning !")
}

// assign to a function  
person.SayHello = greet;

person.SayHello()
person.SayHi()
person.time()



