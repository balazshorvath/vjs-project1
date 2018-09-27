'use strict';
import Phaser from 'phaser';
import Monster from './Monster';

export default class OverWorldScene extends Phaser.Scene{

	constructor(){super({key: 'GameScene'});}

	create(){
		var hehSound = this.sound.add('heh');
		var jungleSprite = this.add.sprite(0, 0, 'jungle');
		jungleSprite.setInteractive();
		jungleSprite.on('pointerdown', (pointer) => {
			hehSound.play();
		});

		this.monster = new Monster(this, 50, 50);
	}

	update(time, delta){
		this.monster.update(time, delta);
	}

}