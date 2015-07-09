var MichaelJacksonDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="marcus"> <img class="cat" style="width:100px;" src="http://images.clipartpanda.com/cat-20clip-20art-11954410851373638183Gerald_G_Cartoon_Cat_Sitting.svg.med.png"/> </span>');
  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  /// this.step();
  
};

MichaelJacksonDancer.prototype = Object.create(makeDancer.prototype);
MichaelJacksonDancer.prototype.constructor = MichaelJacksonDancer;

MichaelJacksonDancer.prototype.step = function(){
  // this.step.call(this, )
  makeDancer.prototype.step.apply(this, arguments);
  this.$node.toggleClass("rotating");

};

//

