/*
 * GameOverOverlay
 * ===============
 *
 */

'use strict';

var SlickUI = require('../3rdparty/slick-ui/slick-ui.min.js');

module.exports = GameOverOverlay;

function GameOverOverlay(game) {
  var buttonOK, panel;
  game.slickUI.add(panel = new SlickUI.Element.Panel(game.width - 156, 8, 150, game.height - 16));
}
