// 普通es6
const fn = () => console.log('这是es6的箭头函数')

class Person {
    constructor(name) {
        this.name = name
    }
}

const person = new Person('wutong')

console.log(person.name)

// 更高级的es6
class Car {
    name = 'Benz'
    static color = 'black'
}

console.log(Car.color)
console.log(new Car().name)

// generator语法
function *func() { 
    yield 1
    yield 2
    return 3
 }
 let newFn = func()
 console.log(newFn.next())
 console.log(newFn.next())
 console.log(newFn.next())
 console.log(newFn.next())

//  高级原型方法
 let arr = []
console.log(arr.includes('a'))

let str = '123'
console.log(str.includes('1'))


export default { fn }