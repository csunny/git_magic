/**
 * Created by think on 2016/7/9.
 */
//如果有两个函数同时需要在加载页面时就执行，可以采用下面的形式
//window.onload = function(){
//    firstFunction();
//    secondFunction();
//}

// of course ! the best way to load many func is addLoadEvent
//such as:
// addLoadEvent(func1);
// addLoadEvent(func2);

window.onload = prepareGallery;
function prepareGallery() {
    if(!document.getElementsByTagName||!document.getElementById||!document.getElementById("imggallery")) return false;
    var gallery = document.getElementById('imggallery');
    var links = gallery.getElementsByTagName('a');
    for(var i=0 ;i< links.length; i++ ){
        links[i].onclick = function () {
            return showpic(this);
        }
//        links[i].onkeydown = function(){
//            return showpic(this);
//        }
        // links[i]onkeydown = links[i].onclick;
    }
}


function showpic(whichpic){
    if(!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if(!document.getElementById("description")) return false;
    var text = whichpic.getAttribute("title");
    var discription = document.getElementById("discription");
    discription.firstChild.nodeValue = text;
    return false;
}