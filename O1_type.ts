//you can use Boolean, but not boolean
//boolean 是js的基本类型之一，Boolean 是js的构造函数
//new Boolean 返回的是一个Boolean对象

//success
let isB: Boolean = new Boolean(1);

//error
// let isB: boolean = new Boolean(1);

//success
let isB2: boolean = Boolean(1) 

//number 
let not: number = NaN;
let unlimit: number = Infinity;

//string
let str: string = "hello"
let words: string = `${str} girl`

//void
function hh(): void {
    console.log(words)
}
hh()

let un1: void = undefined;
let un2: void = null;

//error
// let num:number = un1

//null&undefined
let u1: number = undefined
let u2: number = null