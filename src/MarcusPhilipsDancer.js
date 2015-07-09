var MarcusPhilipsDancer = function(top, left, timeBetweenSteps){
  this.direction = 1;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="marcus"> <img style="width:100px;" src="http://www.clipartlord.com/wp-content/uploads/2013/03/cat2.png"/> </span>');
  // this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  /// this.step();
  
};

MarcusPhilipsDancer.prototype = Object.create(makeDancer.prototype);
MarcusPhilipsDancer.prototype.constructor = MarcusPhilipsDancer;

MarcusPhilipsDancer.prototype.step = function(){
  // this.step.call(this, )
  makeDancer.prototype.step.apply(this, arguments);
  // this.$node.toggle();
  if(this.direction < 0 || this.y > $("body").height()){
    this.direction *= -1;
  }
  var i = Math.floor(Math.random() * 3);
  var j = Math.floor(Math.random() * 4);

  this.y += this.direction*i;
  this.x += this.direction*j;

  this.setPosition(this.y, this.x)
};

