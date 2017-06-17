/*
 * `assets` module
 * ===============
 *
 * Declares static asset packs to be loaded using the `Phaser.Loader#pack`
 * method. Use this module to declare game assets.
 */

'use strict';

// -- Splash screen assets used by the Preloader.
exports.boot = [{
  key: 'splash-screen',
  type: 'image'
}, {
  key: 'progress-bar',
  type: 'image'
}];

// -- General assets used throughout the game.
exports.game = [{
  key: 'phaser',
  type: 'image'
},
{
  key: 'cow',
  type: 'spritesheet',
  frameWidth: 128,
  frameHeight: 96
},
{
  key: 'fg',
  type: 'image'
},
{
  key: 'bg',
  type: 'image'
},
{
  key: 'log',
  url: 'log_full.png',
  type: 'image'
},
{
  key: 'spider',
  url: 'spider_full.png',
  type: 'image'
}];
