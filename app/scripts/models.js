var $ = require('jquery');


function Player(config){
  config = config || {};
  $.extend(this, config);
  console.log(this);
}


function Hero(config){
  Player.call(this, config);
}
Hero.prototype = new Player();
console.log(Hero);


function Enemy(config){
  Player.call(this, config);
}
Enemy.prototype = new Player();
console.log(Enemy);




//module.exports is a node that allows me to "require" my constructor function babies from models.js into my index.js
module.exports = {
'Hero' : Hero,
'Enemy' : Enemy
};
console.log(module.exports);
