/**
 * Created by think on 2016/7/9.
 */

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }
}

function prepareplaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imggallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "img/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var destext = document.createTextNode(" choose an image");
    description.appendChild(destext);
    var br = document.createElement("br");

    var gallery = document.getElementById("imggallery");
    insertAfter(placeholder, gallery);
    insertAfter(br, placeholder);
    insertAfter(description, br);

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


function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

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
        links[i].onkeydown = links[i].onclick;
    }
}


addLoadEvent(prepareplaceholder);
addLoadEvent(prepareGallery);


