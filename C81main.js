canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="orange";
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    colour=document.getElementById("colour").value;
    console.log (colour);
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log ("x=  "+mousex+ ",y=  "+ mousey);
    circle(mousex,mousey);
}
function circle(mousex,mousey) {
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(mousex,mousey,40,0, 2*Math.PI);
ctx.stroke();
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}