'use strict';
import Phaser from 'phaser';
import Monster from './Monster';

export default class OverWorldScene extends Phaser.Scene{

	constructor(){
		super({key: 'GameScene'});
		this.score = 0;
		this.scoreLabel = null;
	}

	preload(){
	}

	create(){
		var hehSound = this.sound.add('heh');
		var jungleSprite = this.add.sprite(0, 0, 'jungle');
		jungleSprite.setInteractive();
		jungleSprite.on('pointerdown', (pointer) => {
			hehSound.play();
		});
		this.monster = new Monster(this, 50, 50);
		this.scoreLabel = this.add.bitmapText(10, 10, 'fontOneKey', this.getScoreText(), 12);
	}

	update(time, delta){
		this.monster.update(time, delta);
		//console.log(this.scoreLabel.text);
		this.scoreLabel.setText(this.getScoreText());

	}

	hit(monster){
		this.score++;
	}

	getScoreText(){
		return 'SCORE ' + this.score;
	}
}