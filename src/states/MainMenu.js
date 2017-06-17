/*
 * MainMenu state
 * ==============
 *
 */

'use strict';

exports.create = function (game) {
  var caption = game.add.text(320, 240, 'My Awesome Game', {
    fill: 'white',
    font: '48px Arial',
    fontStyle: 'bold',
    stroke: 'black',
    strokeThickness: 3
  });
  caption.anchor.set(0.5);
};

exports.update = function (/*game*/) {
  // TODO: Stub
};
