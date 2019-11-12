function sum(x, y, z) {
    var args = arguments;
    // args,arguments不是一个数组,不能使用
    return args[1];
}
//必须输入相等的参数
// console.log(sum(1, 2, 3))
var myNum = sum;
var myNum1 = sum;
// optional parameters
function greet(ha) {
    console.log(ha || "hello girl");
}
// greet()
// error
//  function greet1(hi?: string, lihua: string){
//  }
//default parameters
function greet2(hi, lihua) {
    if (lihua === void 0) { lihua = 'lihua'; }
    console.log(hi + lihua);
}
greet2("hello");
