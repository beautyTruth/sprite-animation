const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
];

animationStates.forEach((state) => {});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();

// -=-=-=-=-=-=-=-=-=-=-=- unrefactored code boneyard -=-=-=-=-=-=-=-=-=-=-=-=

/*

--notes of how to draw and place an image or rect 

  // ctx.fillRect(100, 50, 100, 100);
  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

--from the animate function before we learned how to change the animation rows and columns dynamically 

  // if (gameFrame % staggerFrames == 0) {
  //   if (frameX < 6) frameX++;
  //   else frameX = 0;
  // }


*/
