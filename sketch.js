table = new p5.Table([5])
var base = new Array(3)
for(let i = 0; i<3; i++){
  base[i] = []
}

function setup() {
  createCanvas(screen.width, screen.height);
  size = 100
  for (var i = 0; i < base.length; i++) {
    for(var j = 0; j < 3; j++){
      base[i][j] = new Button(i*size+25, j * size + 10, size / 2, size / 2);
    }
  }
print(base)
}

function draw() {
  background(175);
  print("background set")
  // Show all the buttons
  for (var i = 0; i < base.length; i++) {
    for(var j = 0; j < 3; j++){
      base[i][j].display()
    }
  }
}

function mousePressed() {
  // When the mouse is pressed, we must check every single button
  for (var i = 0; i < base.length; i++) {
    for(var j = 0; j < 3; j++){
      ret = base[i][j].click(mouseX, mouseY, false)
      if(ret && i!=j){
        base[j][i].click(mouseX, mouseY, true)
      }
    }
  }
}