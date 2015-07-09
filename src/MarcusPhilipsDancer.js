var MarcusPhilipsDancer = function(top, left, timeBetweenSteps){
  
  this.direction = -1;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="marcus"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.step();
  
};

MarcusPhilipsDancer.prototype = Object.create(makeDancer.prototype);
MarcusPhilipsDancer.prototype.constructor = MarcusPhilipsDancer;

MarcusPhilipsDancer.prototype.step = function(){
  // this.step.call(this, )
  makeDancer.prototype.step.apply(this, arguments);

  if(this.direction <= 0 || this.y < window.y >= window.innerHeight){
    this.direction *= -1;
  }
  
  this.y += 10*this.direction;
  this.setPosition(this.y, this.x);
};

