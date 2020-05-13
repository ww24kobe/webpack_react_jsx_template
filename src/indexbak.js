class Person {
    constructor (age) {
        this.age = age
    }

    getAge() {
        return '我今年' + this.age + '岁了';
    }

    setAge(newAge) {
        this.age = newAge;
    }

    static fsdf() {
        return 111;
    }
}

let p = new Person(24);
p.setAge(8)
console.log( p.getAge())

Person.info = 'message';
console.log(Person.info)
console.log(Person.fsdf())

// let sum = require('./js/utils.js')
import sum  from './js/utils.js';
console.log( sum(5000,4000) )

// commonjs规范
// require('./css/index.css')

import './css/index.css'


let foo = _ => {
    console.log('fffoo')
}
foo();
