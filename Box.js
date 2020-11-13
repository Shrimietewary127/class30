class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x.y,50,50)
  
  this. Visibility=255
  

}

display(){
  

  if(this.body.speed<3){
    super.display()
}
else{
 
World.remove(world,this.body);
  push();
  this. Visibility=this.visibility-5
  tint(255,this.visibility);
  
  pop();
 
}

  
}
score(){

if(this.visibility<0&&this.visibility>-150){

score++;

}

}
}
