//array-like objectL
interface arrLike { 
    [i: number]: number,
    length: number,
    callee: Function
}

function sum(x: number, y: number, z :number){
    let args: arrLike = arguments 
    // args,arguments不是一个数组,不能使用
    return args[1]
}

//必须输入相等的参数
// console.log(sum(1, 2, 3))

let myNum: (x: number, y: number, z: number) => number = sum 
// 😁um

//用接口定义函数的形状
interface searchFunc {
    (x: number, y: number, z: number): number
}
let myNum1: searchFunc = sum;

// optional parameters
function greet(ha?: string){
    console.log(ha||"hello girl")
}
// greet()

// error
//  function greet1(hi?: string, lihua: string){
//  }

//default parameters
function greet2(hi: string, lihua: string = 'lihua'){
    console.log(hi + " " + lihua)
}
greet2("hello")

