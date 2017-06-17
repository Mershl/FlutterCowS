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

var gravityStrength = 1000;
var gameOverAfterX = -250;

exports.preload = function (game) {
  game.slickUI.load('ui/kenney/kenney.json');
};

exports.create = function (game) {
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

  this.isGameOver = false;
};

exports.update = function () {
  if (!this.isGameOver) {
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

exports.gameOver = function() {
  if (!this.isGameOver) {
    // this.ground.disable();
    // this.bg.disable();
    this.obstacleSpawner.disable();

    this.isGameOver = true;

    this.game.lastScore = this.kfo.getTimeAlive();

    // show GameOverUI overlay
    this.gameOverOverlay = new GameOverOverlay(this.game);
  }
};
