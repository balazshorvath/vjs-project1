'use strict';
import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene{

	constructor(){
		super({key: 'BootScene'});
	}

	preload(){
		//
		// this.load.tilemapTiledJSON('overworldtilemap','../assets/overworld/overworldMaster.json',null, Phaser.Tilemaps.TILED_JSON);
		// this.load.image('overworldtileset','../assets/roguelike-pack/Spritesheet/roguelikeSheet_transparent.png');
		// this.load.spritesheet('playerSpriteKey','../assets/player/dude.png', { frameWidth: 32, frameHeight: 48 });

		this.load.bitmapFont('fontOneKey', 'assets/fonts/font.png', 'assets/fonts/font.fnt');
		this.load.image('monster', 'assets/images/monster.png');
		this.load.image('jungle', 'assets/images/jungle.jpg');
		this.load.audio('heh', 'assets/sounds/heh.mp3');
		this.load.audio('woh', 'assets/sounds/woh.mp3');
		this.load.audio('teleport', 'assets/sounds/teleport.mp3');

	}

	create(){
		this.scene.start('TitleScene');
	}
}
