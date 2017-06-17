/*
 * Game state
 * ==========
 *
 * The ingame state.
 */

'use strict';

var KnownFlyingObject = require('../objects/KnownFlyingObject');
var Ground = require('../objects/Ground');
var Background = require('../objects/Background');
var Obstacles = require('../objects/Obstacles');
var ObstacleSpawner = require('../objects/ObstacleSpawner');
var GameOverOverlay = require('../objects/GameOverOverlay');

var gravityStrength = 500;
var gameOverAfterX = -250;

var isGameOver = false;

exports.create = function (game) {
  this.game = game;
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
  this.game.physics.arcade.gravity.y = gravityStrength;

  this.kfo = new KnownFlyingObject(game, 20, 250);
  this.ground = new Ground(game, 0, 0, 720, 720);
  this.bg = new Background(game, 0, 0, 720, 720);

  this.game.add.existing(this.bg);
  this.game.add.existing(this.ground);
  this.game.add.existing(this.kfo);

  this.obstacles = new Obstacles(game);
  this.obstacleSpawner = new ObstacleSpawner(game, this.obstacles);
};

exports.update = function () {
  if (!isGameOver) {
    this.game.physics.arcade.collide(this.kfo, this.ground, function(objA) {
      objA.hitGround();
    });

    this.game.physics.arcade.collide(this.kfo, this.obstacles, function(objA) {
      objA.hitObstacle();
    });

    this.obstacles.move(this.kfo.getSpeed());

    if (this.kfo.x < gameOverAfterX) {
      this.gameOver();
    }
  }
};

exports.render = function() {

}

exports.gameOver = function() {
  if (!isGameOver) {
    // this.ground.disable();
    // this.bg.disable();
    this.obstacleSpawner.disable();

    isGameOver = true;

    // show GameOverUI overlay
    this.gameOverOverlay = new GameOverOverlay(this.game);
  }
}