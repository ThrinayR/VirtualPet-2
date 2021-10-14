//Create variables here
var dog,dogimg,dogimg1
var database
var foodS
var foodstock
function preload()
{
	//load images here
  dogimg=loadImage("images/dogImg.png")
  dogimg1=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database()
	createCanvas(800, 700);
  dog = createSprite(250,300,150,150)
  dog.addImage("doggimmag",dogimg)
  dog.scale = 0.15
  foodstock - database.ref("Food")
  foodstock.on("value",readStock)

}


function draw() {  
 background("white")
  
  if(keyDown(UP_ARROW))
    {
      writeStock(foodS)
      dog.addImage("dogimg1",dogimg1)



    }
  
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
  //add styles here



  text("press up arrow key to feed the dog",130,10)
}

function readStock(data)
{
//to read values from the database
foodS = data.val()







}

function writeStock(x)
{

//to write values in the database


if(x<=0)
{

x = 0

}


else{

x = x - 1

}
database.ref("/").update({
  Food:x
})
}