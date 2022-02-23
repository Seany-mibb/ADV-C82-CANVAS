canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
color = "brown";
width_of_line = 3;

var last_x, last_y;

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.arc(current_x,current_y,40,0,2*Math.PI);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;
}

function clearCanvas()
{
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}