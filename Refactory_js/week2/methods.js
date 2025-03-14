let car = {
    nama: "mazda",
    color: "white",
    milage: 30,
    start: function(){
        console.log("The car has started")
    }
}

let person ={
    name: "John",
    age: 30,
    speak:function  (){
        console.log("Hello my name is" + this.name + "i am " + this.age + "years old")
    }
}
console.log(person.name)
person.speak()

let store = {
    name: "KGL groceries",
    loactaion: "Maganjo",
    stock: {
        beans: 100,
        maize: 200,
        peas: 150,
    },
    sellProduce: function () {
console.log("sold sucessfully")
    }
}
store.sellProduce()

let calculator ={
    add: function(a,b){
        return a+b 
    },
    subtract: function(a,b){
        return a-b 
    },
}
console.log(calculator.add(2,7))
console.log(calculator.subtract(9,3))
