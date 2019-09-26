function setup() {
  createCanvas(screen.width, screen.height);
  size = 100
  baseobj = new Table(5)
  baseobj.init()
}

function draw() {
  background(175);
  print("background set")
  baseobj.display()
}

function mousePressed() {
  baseobj.click()
}
