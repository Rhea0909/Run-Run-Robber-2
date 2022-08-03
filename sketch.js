var canvas 
var backgroundImage,robberImg,roadImg, homeImg
var moneyImage
var police1Image, police2Image
var robber,money,police1, police2, home


function preload(){
backgroundImage = loadImage("./https:/town 1.jpeg")
robberImg = loadImage("./https:/robber.png")
roadImg = loadImage("./https:/road.webp")
moneyImage = loadImage("./https:/money.jpeg")
police1Image = loadImage("./https:/police male.webp")
police2Image = loadImage("./https:/female police.jpeg")
home = loadImage("./https:/home.jpeg")
}






function setup() {
createCanvas(800,400);
 robber= createSprite(100, 370, 50, 50);
 robber.addImage("robber.png",robberImg)
}

function draw() {
  background(backgroundImage);
   
  drawSprites();

  
}