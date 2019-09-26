class Button{
  constructor(posx, posy, w, h){
    this.x = posx
    this.y = posy
    this.w = w
    this.h = h
    this.endx = this.x + this.w
    this.endy = this.y + this.h
    this.val = 0
    this.centx = (this.x + this.endx) / 2
    this.centy = (this.y + this.endy) / 2
  }
  display(){
    push()
    textAlign(CENTER)
    textSize(24);
    rect(this.x, this.y, this.w, this.h)
    text(this.val, this.centx, this.centy)
    pop()
  }
  click(x, y, force = false){
    var click = false
    if(x > this.x && x < this.x + this.w || force){
      if(y > this.y && y < this.y + this.h || force){
        if(this.val == 0){
          this.val = 1
        }
        else{
          this.val = 0
        }
        click = true
      }
    }
    return(click)
  }
}
class Table{
  constructor(size){
    this.size = size
    this.arr = []
    this.base = []
  }
  init(){
    let n = this.size
    for(var i = 0; i < n; i++){
      this.base[i] = []
      for(let j = 0; j < n; j++){
        this.base[i][j] = new Button(i*size+25, j * size + 10, size / 2, size / 2)
      }
    }
  }
  display(){
    for (var i = 0; i < this.base.length; i++) {
      for(var j = 0; j < this.base[i].length; j++){
        print("display")
        this.base[i][j].display()
      }
    }
  }
  click(){
    for (var i = 0; i < this.base.length; i++) {
      for(var j = 0; j < this.base.length; j++){
        let ret = this.base[i][j].click(mouseX, mouseY, false)
        if(ret && i!=j){
          this.base[j][i].click(mouseX, mouseY, true)
        }
      }
    }
  }
}
