
// let pic1
// let pic2
// let pic4
// let pic3
// let pic5
// let pic6
// let pic7
// let pic8
// let pic9
// let pic10
// let pic11
// let pic12
// let pic13
// let pic14
// let pic15
// let pic16
// let pic17
// let pic18
// let pic19
// let pic20


// let posX1 = 0
// let posY1 = 0
// let posX2 = 0
// let posY2 = 0
// let posX3 = 0
// let posY3 = 0
// let posX4 = 0
// let posY4 = 0
// let posX5 = 0
// let posY5 = 0
// let posX6 = 0
// let posY6 = 0
// function preload() {
//   pic1 = loadImage("images/vaga1full.png")
 
//   pic7 = loadImage("images/v6.png");
//   pic8 = loadImage("images/v7.png");
//   pic9 = loadImage("images/v8.png");
//   pic10 = loadImage("images/v9.png");
//   pic11 = loadImage("images/v10.png");
//   pic12 = loadImage("images/v11.png");
//   pic13= loadImage("images/v12.png");
//   pic14 = loadImage("images/v13.png");
//   pic15 = loadImage("images/v14.png");
//   pic16 = loadImage("images/v15.png");
//   pic17 = loadImage("images/v16.png");
//   pic18 = loadImage("images/v17.png");
//   pic19= loadImage("images/v18.png");
//   pic20= loadImage("images/v19.png");
//   pic21= loadImage("images/vaga2.png");
//   pic2 = loadImage("images/v1.png");
//   pic3 = loadImage("images/v2.png");
//   pic4 = loadImage("images/v3.png");
//   pic5 = loadImage("images/v4.png");
//   pic6 = loadImage("images/v5.png");



  
  
// }
// function setup() {
//   createCanvas(4000,2828);
//   frameRate(60)
//    background(220);
// }
 

// function draw() {

   
 
//   image(pic1,0,0,2000,1414);
//   image(pic2,0,posY2,2000,1414);
//   image(pic3,0,posY3,2000,1414);
//   image(pic4,0,posY4,2000,1414);
//   image(pic5,0,0,2000,1414);
//   image(pic6,0,0,2000,1414);
//   image(pic7,0,0,2000,1414);
//   image(pic8,0,0,2000,1414);
//   image(pic9,0,0,2000,1414);
//   image(pic10,0,0,2000,1414);
//   image(pic11,0,0,2000,1414);
//   image(pic12,0,0,2000,1414);
//   image(pic13,0,0,2000,1414);
//   image(pic14,0,0,2000,1414);
//   image(pic15,0,0,2000,1414);
//   image(pic16,0,0,2000,1414);
//   image(pic17,0,0,2000,1414);
//   image(pic18,0,0,2000,1414);
//   image(pic19,0,0,2000,1414);
//   image(pic19,0,0,2000,1414);
//   image(pic20,0,0,2000,1414);
//   image(pic21,0,0,2000,1414);

//   text(mouseX,100,100);
//    text(mouseY,0,100);
 

  
// }
// function mouseClicked() {
//   if ((mouseX > 10 && mouseX < 250 && mouseY > 10 && mouseY < 500) && (posX2 == 0 || posY2 == 0)) {
//     posX2 += 1;
//     posY2 += 10;
//   } else if ((mouseX > 250 && mouseX < 400 && mouseY > 10 && mouseY < 500) && (posX3 == 0 || posY3 == 0)) {
//     posX3 += 1;
//     posY3 += 10;
    
//   }else if ((mouseX > 329 && mouseX < 499 && mouseY > 279 && mouseY < 296) && (posX4 == 0 || posY4 == 0)) {
//     posX4 += 1;
//     posY4 += 10;
    
//   } 
//   else {
//     posX2 = 0;
//     posY2 = 0;

//     posX3 = 0;
//     posY3 = 0;

//      posX4 = 0;
//      posY4 = 0;
//   }
// }

      
let pic1, pic2, pic3, pic4, pic5, pic6;
let pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21;

let posX1 = 0
 let posY1 = 0
 let posX2 = 0
 let posY2 = 0
 let posX3 = 0
 let posY3 = 0
 let posX4 = 0
 let posY4 = 0
 let posX5 = 0
 let posY5 = 0
 let posX6 = 0
 let posY6 = 0
 let posX7 = 0
 let posY7 = 0
 let posY8 = 0
 let posX8 = 0
 let posY9 = 0
 let posX9 = 0
 let posY10 = 0
 let posX10 = 0
 let posY11 = 0
 let posX11 = 0
 let posY12 = 0
 let posX12 = 0
 let posY13 = 0

function preload() {
  pic1 = loadImage("images/vaga1full.png");
  pic7 = loadImage("images/v6.png");
  pic8 = loadImage("images/v7.png");
  pic9 = loadImage("images/v8.png");
  pic10 = loadImage("images/v9.png");
  pic11 = loadImage("images/v10.png");
  pic12 = loadImage("images/v11.png");
  pic13 = loadImage("images/v12.png");
  pic14 = loadImage("images/v13.png");
  pic15 = loadImage("images/v14.png");
  pic16 = loadImage("images/v15.png");
  pic17 = loadImage("images/v16.png");
  pic18 = loadImage("images/v17.png");
  pic19 = loadImage("images/v18.png");
  pic20 = loadImage("images/v19.png");
  pic2 = loadImage("images/v1.png");
  pic3 = loadImage("images/v2.png");
  pic4 = loadImage("images/v3.png");
  pic5 = loadImage("images/v4.png");
  pic6 = loadImage("images/v5.png");
  pic21 = loadImage("images/vaga2.png");
}

function setup() {
  createCanvas(2000, 1414); 
  frameRate(60);
}

function draw() {
  background(220);

  
  image(pic1, 0, 0, 2000, 1414);
   image(pic8, posX8, posY8, 2000, 1414);

  image(pic2, 0, posY2, 2000, 1414);
  image(pic3, 0, posY3, 2000, 1414);
  //image(pic4, posX4, posY4, 2000, 1414);
  image(pic21, 0, 0, 2000, 1414);

  image(pic5, posX5, posY5, 2000, 1414);
  image(pic6, posX6, posY6, 2000, 1414);
  image(pic7, posX7, posY7, 2000, 1414);
  //image(pic8, posX8, posY8, 2000, 1414);
  image(pic9, 0, 0, 2000, 1414);
  image(pic10, 0, 0, 2000, 1414);
  image(pic11, 0, 0, 2000, 1414);
  image(pic12, 0, 0, 2000, 1414);
  image(pic13, 0, 0, 2000, 1414);
  image(pic14, 0, 0, 2000, 1414);
  image(pic15, 0, 0, 2000, 1414);
  image(pic16, 0, 0, 2000, 1414);
  image(pic17, 0, 0, 2000, 1414);
  image(pic18, 0, 0, 2000, 1414);
  image(pic19, 0, 0, 2000, 1414);
  image(pic20, 0, 0, 2000, 1414);
  //image(pic21, 0, 0, 2000, 1414);
  image(pic4, posX4, posY4, 2000, 1414);
//image(pic7, posX7, posY7, 2000, 1414);
  

  
  fill(0);
  noStroke();
  textSize(20);
  text("mouseX: " + mouseX + "  mouseY: " + mouseY, 20, 20);
}

function mouseClicked() {
 //pic2
  if (mouseX > 60 && mouseX < 215 && mouseY > 10 && mouseY < 300) {
    if (posX2 == 0 && posY2 == 0) {
      posX2 += 1;
      posY2 += 10;
    } else {
      posX2 = 0;
      posY2 = 0;
    }
  }

  // pic3
  if (mouseX > 250 && mouseX < 400 && mouseY > 10 && mouseY < 297) {
    if (posX3 == 0 && posY3 == 0) {
      posX3 += 1;
      posY3 += 10;
    } else {
      posX3 = 0;
      posY3 = 0;
    }
  }

  // pic4
  if (mouseX > 400 && mouseX < 499 && mouseY > 10 && mouseY < 500) {
    if (posX4 == 0 && posY4 == 0) {
      posX4 += 0;
      posY4 += 10;
    } else {
      posX4 = 0;
      posY4 = 0;
    }
  }
  // pic5
  if(mouseX>65 && mouseX<512 && mouseY>325 && mouseY<454){
    if (posX5 == 0 && posY5 == 0){
      posX5 += -2;
      posY5 += 2;
    } else {
      posX5 = 0;
      posY5 = 0;}
    }
    //pic6
    if(mouseX>59 && mouseX<502 && mouseY>490 && mouseY<716){
      if (posX6 == 0 && posY6 == 0){
        posX6 += 0;
        posY6 += 20;
      } else {
        posX6 = 0;
        posY6 = 0;
      }
    } 
    if(mouseX>549 && mouseX<992 && mouseY>21 && mouseY<373){
      if (posX7 == 0 && posY7 == 0){
        posX7 -= 200 ;
        posY7 += 100;
      } else {
        posX7 = 0;
        posY7 = 0;
      }
  }
  if(mouseX>550 && mouseX<992 && mouseY>706 && mouseY<707){
    if (posX8 == 0 && posY8 == 0){
        posX8 -= 545;
        posY8 += 621;
     }  else {
        posX8 = 0;
        posY8 = 0;
     }
}
}
