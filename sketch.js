function setup() {
    createCanvas(600, 600);
    background("turquoise");
  }
  
  function draw() {
    stroke("gold");
    fill("navy");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
   
  }