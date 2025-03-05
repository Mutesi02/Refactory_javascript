// let car={
//     my:"Mazda",
//     color:"white",
//     milage:30

// }

let person = {
    name:"John",
    age:30,
   speak: function (){
        console.log("hello my name is " + this.name + "Iam " +this.age +"years old")
   }
}
console.log(person.name)
person.speak()


let store={
    name:"Karibu groceries",
    location:"Maganjo",
    stock:{
        beans:1000,
        maize:200,
        peas:250
    },
    saleProduce: function(quantity){
    
            console.log("sold successfully")

    }
    
}
store.saleProduce()


let calculator ={
    add:function(a,b){
    return a+b
    },
    subtract:function(a,b){
        return a-b
    }
}
console.log(calculator.add(5,4));
console.log(calculator.subtract(10,5));