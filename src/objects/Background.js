/*
 * Background
 * ==========
 *
 */

'use strict';

module.exports = Background;

var scrollSpeed = 400;

function Background(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'bg');

  this.autoScroll(-scrollSpeed, 0);
}
Background.prototype = Object.create(Phaser.TileSprite.prototype);
Background.prototype.constructor = Background;

Background.prototype.disable = function () {
  this.autoScroll(0, 0);
};
