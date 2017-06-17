/*
 * Preloader state
 * ===============
 *
 * Takes care of loading the main game assets, including graphics and sound
 * effects, while displaying a busy splash screen.
 */

'use strict';

var assets = require('../assets');

function showSplashScreen (game) {
  // game.add.image(0, 0, 'flutter-splash-screen');
  game.load.setPreloadSprite(game.add.image(82, 282, 'progress-bar'));
}

exports.preload = function (game) {
  showSplashScreen(game);
  game.load.pack('game', null, assets);

  /* initialize plugins */
  game.slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
  game.slickUI.load('ui/kenney/kenney.json');
};

exports.create = function (game) {
  game.state.start('MainMenu');
};
