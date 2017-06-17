/*
 * Ground
 * ======
 *
 */

'use strict';

module.exports = Ground;

var bodySizeY = 54;
var scrollSpeed = 400;

function Ground(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'fg');

  this.autoScroll(-scrollSpeed, 0);

  this.game.physics.arcade.enableBody(this);
  this.body.setSize(width, bodySizeY, 0, height - bodySizeY);
  this.body.allowGravity = false;
  this.body.immovable = true;
}
Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.disable = function () {
  this.autoScroll(0, 0);
};
