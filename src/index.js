'use strict';
import * as Phaser from 'phaser';
import BootScene from './BootScene';
import TitleScene from './TitleScene';
import GameScene from './GameScene';

let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 480,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: false
		}
	},
	scene: [
		BootScene,
		TitleScene,
		GameScene
	]
};

new Phaser.Game(config);
