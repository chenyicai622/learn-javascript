// 构造函数 Foo
function Foo(name) {
	this.name = name // 实例属性
}

// 原型上所有 属性 和 方法 都可以被实例共享
// 创建 Foo 函数时，系统会自动创建一个 Foo 的 prototype 原型属性
// 该属性 为一个对象  包含 constructor 和 __proto__ 两个属性
Foo.prototype.friends = ['Jason', 'John']
Foo.prototype.name = 'Lucky'
Foo.prototype.show = function () {
	console.log(this.name)
}

// new 一个对象 生成实例 系统会自动分配一个 __proto__ 属性 指向 原型 即 Foo.prototype
const foo1 = new Foo('Jack')

Foo.prototype = {
	friends: ['abc', 'aaa'],
	name: 'cc',
}

// foo1.__proto__ 会指向 Foo原型 即 Foo.prototype
// foo1.show() 会先从自身查找，没有从Foo原型上查找
// 所以两者相等
console.log(foo1.__proto__.show() === foo1.show())

//console.log(foo1.name) // 实例会先查找实例属性 this.name ，没有再去对应的原型上查找即 Foo.prototype
//console.log(foo1.friends)

//let obj = { name: 'jc', age: 18 }
//let obj1 = obj
//obj = { name: 'cc', age: 20 }
//console.log(obj) // {name: 'cc', age: 20} obj指针指向了新的对象
//console.log(obj1) // {name: 'jc', age: 18} obj1指针依旧指向原obj对象，并没有改变指正

// 总结
// 原型prototype是定义函数由js【自动分配】给函数的一个可以被所有构造函数【实例】对象变量共享的对象变量【也叫对象属性】
// 当通过new 函数时，此时这个函数就是构造函数
// new创建新对象时候，会赋予一个__proto__属性指向构造函数的prototype原型对象空间

// 面试题
// 创建实例后再覆盖原型，实例对象无法访问到，为什么？
const foo2 = new Foo()
Foo.prototype = { name: '123' }
// 原因是原型对象指向了新的对象空间，所以实例对象无法访问原有的原型对象了
