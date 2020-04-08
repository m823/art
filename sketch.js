var images = [];
var sounds = [];
var script;
var font;
var counter = 0;

var preload = function(){
  for(var i = 1; i < 10; i++){
    images[i - 1] = loadImage("images/" + i + ".png");
  }
  
  for(var i = 1; i < 3; i++){
    sounds[i - 1] = loadSound("sounds/" + i + ".mp3");
  }
  
  script = loadStrings("text/script.txt");
  font = loadFont("text/font.ttf");
  
};

var setup = function() {
  createCanvas(850, 600);
  
  textFont(font);
  textSize(20);
}

var draw = function() {
  background(255);
  
  if(counter < 5){
    image(images[1], 0,0, width, 0.8*height);
  } else if(counter === 5){
    image(images[8], 0,0, width, 0.8*height);
  } else if(counter < 8){
    image(images[4], 0,0, width, 0.8*height);
  } else if(counter < 10){
    image(images[2], 0,0, width, 0.8*height);
  } else if(counter < 12){
    image(images[0], 0,0, width, 0.8*height);
  }  else if(counter < 15){
    image(images[3], 0,0, width, 0.8*height);
  }  else if(counter === 15){
    image(images[8], 0,0, width, 0.8*height);
  } else if(counter < 19){
    image(images[5], 0,0, width, 0.8*height);
  } else {
    image(images[7], 0,0, width, 0.8*height)
  }
  //text box
  image(images[6], 0, 0.8*height, width, 0.2*height)
  
  //actual text
  text(script[counter], 60, 0.8*height+40);
  text(script[counter + 1], 60, 0.8*height+80);
};

var mousePressed = function(){
  counter++;
  if(counter === 5 || counter === 15){
    sounds[1].play();
  } else {
    sounds[0].play();
  }
  
  if(counter === 23){
    noLoop();
  }
};