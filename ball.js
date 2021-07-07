class ball {
 constructor(x,y,r){
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.2
  }
  this.x = x;
  this.y = y;
  this.r = r;
  this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,
  options);
  this.image = loadImage("sprites/paper.png");
  World.add(world,this.body);
}
display(){
  console.log(ball.x);
  console.log(ball.y);
  push();
  translate(this.body.position.x, this.body.position.y);
  ellipse(0,0,this.r,this.r);
  image(this.image,this.x,this.y,0,this.width,this.height);
  pop();
}
}