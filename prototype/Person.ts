class Person {
	name: string
	age: number
	// 实例属性或者对象属性

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	doSay(who: string) {
		console.log(`${this.name}和${who}`)
	}
}

// p1 实例的变量  new Person('jc', 18) 实例的对象空间
// new 一个类 共做了三件事
// 1、在堆中为类的某个对象【实例】分配一个空间
// 2、调用对应的构造函数【构造器】 并且把构造器的各个参数赋值给对象属性
//    new Person自动匹配无参数的构造器
// 3、把对象赋值给对象变量
let p1 = new Person('jc', 18)
console.log(p1)
