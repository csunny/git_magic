/**
 * Created by xx on 2016/7/12.
 */
//全局作用域
//由于window对象扮演着ECMAscript中Global对象的角色因此所有在全局中声明的变量，函数都会变成window
//对象的属性和方法。

var age=29;
function sayAge() {
    console.log(this.age);
}

window.sayAge();



