//you can use Boolean, but not boolean
//boolean 是js的基本类型之一，Boolean 是js的构造函数
//new Boolean 返回的是一个Boolean对象
//success
var isB = new Boolean(1);
//error
// let isB: boolean = new Boolean(1);
//success
var isB2 = Boolean(1);
//number 
var not = NaN;
var unlimit = Infinity;
//string
var str = "hello";
var words = str + " girl";
//void
function hh() {
    console.log(words);
}
hh();
var un1 = undefined;
var un2 = null;
//error
var num = un1;
//null&undefined
var u1 = undefined;
var u2 = null;
