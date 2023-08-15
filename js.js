const person = {
    name: {
        first: 'Robert',
        last: 'Smith',
    },
    age: 32, 
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name.first}.`);
    },
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

function Person(name) {
    this.name = name;
    this.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}.`);
    };
}

const mark = new Person("Mark");

console.log(  mark.introduceSelf(), mark.name);