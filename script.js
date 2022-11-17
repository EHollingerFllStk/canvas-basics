const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
   
})

ctx.fillStyle='blue';
ctx.strokeStyle = 'red';
ctx.lineWidth = 15;
ctx.beginPath();
ctx.arc(300, 500, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.fill()
console.log(ctx);


// const CANVAS_WIDTH = canvas.width = 600;
// const  CANVAS_HEIGHT = canvas.height= 600;

// const playerImage = newImage();
// playerImage.src = 'shadow_dog.png';



// function animate() {
//     ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
// }