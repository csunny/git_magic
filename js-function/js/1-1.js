/**
 * Created by xx on 2016/7/12.
 */
/*函数的定义有两种：一种是函数声明，一种是函数表达式
* 函数声明可以事先在函数之前调用，函数表达式不可*/

//递归函数
function factorial(num){
    if(num <=1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}

// 这是一个经典的递归阶乘函数。利用下面的访问形式可以导致它出错。
var anotherFactorial  = factorial;
factorial = null;
console.log(anotherFactorial(4)); // factorial is not a function

//以上代码先把factorial()函数保存在变量anotherFactorial中。

function factorial(num){
    if(num <= 1){
        return 1;
    }
    else{
        return num *arguments.callee(num-1);
    }
}

//在严格的模式下，不能通过脚本访问arguments.callee  访问此属性会导致错误。
//可以使用命名函数表达式来达到相同的结果
var factorial = (function f(num) {
    if(num <=1 ){
        return 1;
    }else{
        return num *f(num-1);
    }
})


