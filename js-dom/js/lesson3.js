/**
 * Created by think on 2016/7/9.
 */
var pur = document.getElementById("purchases");
//console.log(typeof pur);
var li = document.getElementsByTagName("li");
for (i=0; i<=li.length; i++){
//    console.log(typeof li[i]);
}

var parse = document.getElementsByTagName("p");
alert(parse.length)
for (var i=0; i<parse.length; i++){
    var title_text = parse[i].getAttribute("title");
    if(title_text!=null){
        alert(title_text)
        parse[i].setAttribute("title", "a list of goods");
        var new_text = parse[i].getAttribute("title");
    }
    alert(new_text);
}