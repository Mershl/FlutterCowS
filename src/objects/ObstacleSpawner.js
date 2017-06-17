/*
 * ObstacleSpawner
 * ===============
 *
 */

'use strict';

module.exports = ObstacleSpawner;

var spawnEveryS = 4;

function ObstacleSpawner(game, obstaclesGroup) {
  this.obstaclesGroup = obstaclesGroup;

  this.spawnObstacle(1);

  this.timer = game.time.create(false);
  this.timer.loop(spawnEveryS * 1000, this.spawnObstacle, this, 1);
  this.timer.start();
}

ObstacleSpawner.prototype.update = function (difficultyLevel) {
  /* difficultyLevel: current difficulty (raises with time) */

};

ObstacleSpawner.prototype.spawnObstacle = function(difficultyLevel) {
  this.obstaclesGroup.createObstacle(250);
};

ObstacleSpawner.prototype.disable = function() {
  this.timer.stop();
};
