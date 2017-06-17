/*
 * `app` module
 * ============
 *
 * Provides the game initialization routine.
 */

'use strict';

// Import game states.
var states = require('./states');

exports.init = function () {
  var game = new Phaser.Game(720, 720, Phaser.CANVAS);

  // Dynamically add all required game states.
  Object
    .keys(states)
    .forEach(function (key) {
      game.state.add(key, states[key]);
    });

  game.state.start('Boot');

  return game;
};
