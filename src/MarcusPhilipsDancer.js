var MarcusPhilipsDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.step();
  
};

MarcusPhilipsDancer.prototype = Object.create(makeDancer.prototype);
MarcusPhilipsDancer.prototype.constructor = MarcusPhilipsDancer;

MarcusPhilipsDancer.prototype.step = function(){
  // this.step.call(this, )
  makeDancer.prototype.step.apply(this, arguments);
  this.$node.toggle();
};

