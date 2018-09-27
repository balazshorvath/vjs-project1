'use strict';
import * as Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene{
	constructor(){
		super({key: 'TitleScene'});

		this.title = 'Project 1';
		this.blinkRate = 500;
		this.startKey = null;
		this.pressX = null;
	}

	preload(){
		this.add.text(16, 16, this.title, {fontSize: '32px', fill: '#FFFFFF'});
		this.pressX = this.add.bitmapText(64, 64, 'fontOneKey', 'PRESS X TO START', 8);
		this.startKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
	}

	create(){}

	update(time, delta){

		// console.log(delta)

		if(this.startKey.isDown){
			this.scene.stop('TitleScene');
			this.scene.start('GameScene');
		}

		this.blinkRate -= delta;
		if(this.blinkRate < 0){
			this.pressX.alpha = this.pressX.alpha === 1 ? 0 : 1;
			this.blinkRate = 500;
		}
	}
}