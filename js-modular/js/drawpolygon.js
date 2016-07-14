//刷新页面时加载init函数
addLoadEvent(init);
//window.onload = init;

// radius of click around the first point to close the draw.
var END_CLICK_RADIUS = 10;
//the max number of points of your polygon.
var MAX_POINTS = 20;
var MouseX = 0;
var MouseY = 0;
var isStarted = false;
var points = null;
var canvas = null;
var ctx = null;

function init() {
// initializing canvas and draw color
    canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

//        console.log(ctx);
    }
    //更换绘制颜色
    changeColor("red");
    canvas.addEventListener("click", function (e) {
        var x = e.clientX - canvas.offsetLeft;
        var y = e.clientY - canvas.offsetTop;
//        console.log('x:'+x +","+"y:"+y);
        if (isStarted) {
            // drawing the next line, and closing the polygon if needed.
            if (Math.abs(x - points[0].x) < END_CLICK_RADIUS && Math.abs(y - points[0].y) < END_CLICK_RADIUS) {
                isStarted = false;
            } else {
                points[points.length] = new Point(x, y);
                if (points.length >= MAX_POINTS) {
                    isStarted = false;
                }
            }


        } else if (points == null) {
            //opening the polygon
            points = new Array();
            points[0] = new Point(x, y);

            isStarted = true;
        }
    }, false);

    //we just save the location of the mouse
    canvas.addEventListener('mousemove', function (e) {
        MouseX = e.clientX - canvas.offsetLeft;
        MouseY = e.clientY - canvas.offsetTop;
    }, false);

//    console.log("MouseX:"+MouseX+','+"MouseY:"+MouseY);

    //refresh time

    setInterval("draw();", 100);
}


function changeColor(color) {
    ctx.strokeStyle = color;
}

function Point(x, y) {
    this.x = x;
    this.y = y;

}

// draw polygon
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();

    if(points != null && points.length > 0) {
        ctx.moveTo(points[0].x, points[0].y);



        for(i = 1 ; i < points.length ; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }

        if(isStarted) {
            ctx.lineTo(MouseX, MouseY);
            ctx.lineWidth = "6";

        } else {
            ctx.lineTo(points[0].x, points[0].y);
            ctx.lineWidth = '6';
        }
    }
    ctx.stroke();
}
// addLoadEvent function
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;

    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}





