'use strict';
import Phaser from 'phaser';


export default class Monster extends Phaser.GameObjects.Sprite{

	constructor(scene, x, y){

		super(scene, x, y, 'monster');
		this.setScale(.25);

		scene.physics.world.enable(this);
		scene.add.existing(this);

		this.teleportSound = scene.sound.add('teleport');
		this.wohSound = scene.sound.add('woh');


		this.setInteractive();
		this.on('pointerdown', (pointer) => {
			this.wohSound.play();
			this.teleport(false);
			this.scene.hit(this);
		});

		this.counter = 0;
	}

	update(time, delta){
		this.counter ++;
		if(this.counter > 45){
			this.teleport();
		}
	}

	teleport(withsound = true){
		var x = Math.random()*800;
		var y = Math.random()*480;

		let tweendata = {
			targets: this,
			x: x,
			y: y,
			duration: 300,
			yoyo:false,
			ease: "Cubic.easeIn"}

		this.scene.tweens.add(tweendata);
		this.counter = 0;
		if(withsound){
			this.teleportSound.play();
		}
	}

}