/**
 * Created by xx on 2016/7/13.
 */
jscript = function () {
    console.log("first level");
}
jscript.ui = function(){
    console.log("second level");
}

jscript.ui.alerts =  function () {
    console.log("third level");
}

jscript.ui.alerts.showErrorAlert = function () {
    console.log("four level");
    console.log("An error occurred!");
}

//调用jscript.ui.alerts.showErrorAlert
//jscript.ui.alerts.showErrorAlert();

jscript.ui.alerts.MessageDisplay = function(inMsg){
    this.msg = inMsg;
    this.toString = function(){
        return "msg="+ this.msg
    }
}

var v = new  jscript.ui.alerts.MessageDisplay("hello!");
console.log(v)


//创建一个jscript.string的包，然后希望能够把此包独立于任何其他可能存在js中的包
//输入到代码中
//如果jscript未定义，则创建jsscript对象。
if(typeof jscript == 'undefined'){
    jscript = function () {
    }
}
jscript.string = function(){
}
jscript.string.sampleFunction = function(inMsg){
    console.log(inMsg);
}

