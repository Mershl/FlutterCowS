/*
 * GameOverOverlay
 * ===============
 *
 */

'use strict';

module.exports = GameOverOverlay;

function GameOverOverlay(game) {
  var button;
  var panel;
  game.slickUI.add(panel = new SlickUI.Element.Panel(game.width - 156, 8, 150, game.height - 16));
  panel.add(new SlickUI.Element.Text(10,0, "Game Over")).centerHorizontally().text.alpha = 0.5;
  panel.add(button = new SlickUI.Element.Button(0,game.height - 166, 140, 80)).events.onInputUp.add(function () {
    console.log('Clicked restart game');
  });

  button.add(new SlickUI.Element.Text(0, 0, 'Restart game')).center();

  panel.add(button = new SlickUI.Element.Button(0,game.height - 76, 140, 40));
  button.add(new SlickUI.Element.Text(0,0, "Close")).center();

  var basePosition = panel.x;

  game.add.tween(panel).to( {x: basePosition}, 500, Phaser.Easing.Exponential.Out, true);
  game.slickUI.container.displayGroup.bringToTop(panel.container.displayGroup);
}
