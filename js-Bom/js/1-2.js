/**
 * Created by xx on 2016/7/12.
 */
var leftPos = (typeof window.screenLeft == "number")?window.screenLeft: window.screenX;
console.log(leftPos);

var topPos = (typeof window.screenTop == "number")?window.screenTop :window.screenY;
console.log(topPos);

//将窗口移动到屏幕左上角
window.moveTo(0,0);

//将窗口向下移动100像素
window.moveBy(0, 100)

//取得页面视口的大小，
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;

if(typeof pageWidth != "number"){
    if(document.compatMode == 'CSS1Compat'){
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    }else{
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}
