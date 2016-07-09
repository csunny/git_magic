/**
 * Created by think on 2016/7/9.
 */

function showpic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var discription = document.getElementById("discription");
    discription.firstChild.nodeValue = text;

}
function countBodyChild(){
    var body_elcment = document.getElementsByTagName("body")[0];
    console.log(body_elcment.childNodes.length);
}
window.onload = countBodyChild();