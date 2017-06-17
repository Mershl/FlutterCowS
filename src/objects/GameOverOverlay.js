/*
 * GameOverOverlay
 * ===============
 *
 */

'use strict';

module.exports = GameOverOverlay;

function GameOverOverlay(game) {
  var buttonRestart, buttonClose;
  var panel;
  var panelWidth = game.width / 2;
  var panelHeight = game.height / 3;
  game.slickUI.add(panel = new SlickUI.Element.Panel(game.width / 2 - panelWidth / 2, (game.height / 5) * 2, panelWidth, panelHeight));
  panel.add(new SlickUI.Element.Text(10, 0, 'Game Over')).centerHorizontally().text.alpha = 0.5;
  panel.add(new SlickUI.Element.Text(10, 40, 'Time Alive:')).centerHorizontally();
  panel.add(new SlickUI.Element.Text(10, 60, game.lastScore.toFixed(2) + 's')).centerHorizontally();

  /* RESTART BUTTON */
  buttonRestart = new SlickUI.Element.Button(0, panel.height - 80, panel.width / 2 - 4, 80);
  panel.add(buttonRestart);
  buttonRestart.add(new SlickUI.Element.Text(0, 0, 'Restart')).center();
  buttonRestart.events.onInputUp.add(function () {
    game.state.start('Game');
  });

  /* CLOSE BUTTON */
  buttonClose = new SlickUI.Element.Button(panel.width / 2 + 4, panel.height - 80, panel.width / 2 - 4, 80);
  panel.add(buttonClose);
  buttonClose.add(new SlickUI.Element.Text(0,0, 'Close')).center();
  buttonClose.events.onInputUp.add(function () {
    game.state.start('MainMenu');
  });

  var basePosition = panel.x;

  game.add.tween(panel).to( {x: basePosition}, 500, Phaser.Easing.Exponential.Out, true);
  game.slickUI.container.displayGroup.bringToTop(panel.container.displayGroup);
}
