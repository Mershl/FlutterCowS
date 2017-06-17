/*
 * MainMenu state
 * ==============
 *
 */

'use strict';

exports.preload = function (game) {
  game.slickUI.load('ui/kenney/kenney.json');
}

exports.create = function (game) {
  var splash = game.add.image(0, 0, 'splash');

  var button = new SlickUI.Element.Button(game.width / 2 - (140 / 2), game.height / 4 * 3, 140, 80);
  game.slickUI.add(button);
  button.add(new SlickUI.Element.Text(0, 0, 'Play')).center();
  button.events.onInputUp.add(function() {
    game.state.start('Game');
  });
};
