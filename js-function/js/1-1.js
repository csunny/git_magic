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

//闭包

function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if(value1 < value2){
            return -1;

        }else{
            return 0;
        }
    }
}

/*当某个函数被调用时，会创建一个执行环境，execution context*及相应的作用域链，然后，使用argument和其他命名参数的值来初始化函数的活动
对象，但在作用域链中，外部函数的活动对象始终处于第二位，外部函数的活动对象处于第三位/
 */

function compare(value1, value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}

var result = compare(5, 10);


// 闭包与变量
function createFunctions() {
    var result = new Array()
    for(var i=0; i<10; i++){
        result[i] = function () {
            return i;
        }

        return result;
    }
}


//