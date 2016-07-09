/**
 * Created by think on 2016/7/9.
 */
function popUp(winURL){
    window.open(winURL, "popup", "width=600, height=480");
}

window.onload = prepareLinks;

function prepareLinks() {
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i= 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function () {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
