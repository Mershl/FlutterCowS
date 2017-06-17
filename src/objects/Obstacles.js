/*
 * Obstacles
 * ====
 *
 */

'use strict';

module.exports = Obstacles;

var groundLevel = 70; // avoid to spawn gap in the ground
var spiderChance = 0.2; // chance to spawn a spider as top pipe
var destroyAfterX = -300;

function Obstacles(game) {
  Phaser.Group.call(this, game);
}
Obstacles.prototype = Object.create(Phaser.Group.prototype);
Obstacles.prototype.constructor = Obstacles;

Obstacles.prototype.update = function () {
  
};

Obstacles.prototype.createObstacle = function(gapBetween) {
  var rangeY = this.game.world.height - (gapBetween / 2) - groundLevel;
  var targetY = this.game.rnd.integerInRange((gapBetween / 2), rangeY);
  var targetX = this.game.world.width + 100;

  var spawnTopSpider = this.game.rnd.frac() < spiderChance;
  var topPipeSprite = spawnTopSpider ? 'spider' : 'log';
  var topPipe = this.game.make.sprite(targetX, targetY - (gapBetween / 2), topPipeSprite);
  topPipe.anchor.y = spawnTopSpider ? 1.0 : 0.0;
  if (!spawnTopSpider)
    topPipe.scale.y = -1;

  var bottomPipe = this.game.make.sprite(targetX, targetY + (gapBetween / 2), 'log');
  bottomPipe.anchor.y = 0.0;

  this.game.physics.arcade.enableBody(topPipe);
  topPipe.body.allowGravity = false;
  topPipe.body.immovable = true;
  topPipe.body.damping= 0;
  topPipe.body.mass= 0.1;
  this.game.physics.arcade.enableBody(bottomPipe);
  bottomPipe.body.allowGravity = false;
  bottomPipe.body.immovable = true;
  bottomPipe.body.damping= 0;
  bottomPipe.body.mass= 0.1;

  this.add(topPipe);
  this.add(bottomPipe);
};

Obstacles.prototype.move = function(playerSpeed) {
  var gameRef = this.game;
  this.forEach(function(pipe) {
    pipe.body.velocity.x = -playerSpeed * 200;

    if (pipe.body.x < destroyAfterX) {
      pipe.destroy();
    } else {
      gameRef.debug.body(pipe);
    }
  });
};

Obstacles.prototype.disable = function() {
  this.forEach(function(pipe) {
    pipe.body.velocity.set(0);
  });
};
