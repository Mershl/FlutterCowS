/*
 * KnownFlyingObject
 * =================
 *
 */

'use strict';

module.exports = KnownFlyingObject;

var moveSpeed = 2;
var flapStrength = 350;
var rotationSpeed = 0.25;

var isDead = false;
var isFalling = false;
var timeAlive = 0;  // in s

function KnownFlyingObject(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'cow');

  /* animations setup */
  this.animations.add('flying', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20, true);
  this.animations.add('standing', [16, 17, 18, 19, 20, 21, 22, 23], 20, true);
  this.animations.add('falling', [24, 25, 26, 27, 28, 29, 30, 31], 20, true);
  this.animations.add('dead', [16], 20, true);

  this.game.physics.arcade.enableBody(this);
  this.body.bounce.set(0.5);

  // default animation
  this.fly();

  this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
}
KnownFlyingObject.prototype = Object.create(Phaser.Sprite.prototype);
KnownFlyingObject.prototype.constructor = KnownFlyingObject;

KnownFlyingObject.prototype.update = function () {
  if (!isDead) {
    /* flap on Spacebar or Mouse Click */
    if (this.game.input.activePointer.isDown || this.spaceKey.isDown)
    {
      this.flap();
    }

    timeAlive += this.game.time.physicsElapsed;
  }

  var velocity = this.game.math.clamp(this.body.velocity.y, -350, 350);
  var targetAngle = velocity / 350 * 10;

  this.rotation = this.game.math.rotateToAngle(this.rotation, this.game.math.degToRad(targetAngle), rotationSpeed);

  this.game.debug.text('TimeAlive: ' + timeAlive.toFixed(2), 20, 20);
};

KnownFlyingObject.prototype.fly = function () {
  this.play('flying');
};

KnownFlyingObject.prototype.flap = function() {
  this.body.velocity.y = -flapStrength;
};

KnownFlyingObject.prototype.hitGround = function() {
  if (!isDead) {
    isDead = true;

    this.play('falling'); // looks funny, let's keep it at falling instead of Dead for now ;)
  }

  isFalling = false;
};

KnownFlyingObject.prototype.hitObstacle = function() {
  if (!isDead) {
    isDead = true;
    isFalling = true;

    this.play('falling');
  }
};

KnownFlyingObject.prototype.getSpeed = function() {
  return moveSpeed;
};
