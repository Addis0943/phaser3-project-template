import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
export default class TitleScene extends Phaser.Scene {
	constructor() {
		super('Title');
	}
	preload() {
		this.load.image('blueButton1', 'assets/ui/blue_button02.png');
		this.load.image('blueButton2', 'assets/ui/blue_button03.png');
		this.load.image('phaserLogo', 'assets/logo.png');
		this.load.image('box', 'assets/ui/grey_box.png');
		this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
		this.load.audio('bgMusic', ['assets/TownTheme.mp3']);

	}

	create() {
		// Game
		this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

		// Options
		this.optionsButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Options', 'Options');

		// Credits
		this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

		this.model = this.sys.game.globals.model;
		if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
			this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
			this.bgMusic.play();
			this.model.bgMusicPlaying = true;
			this.sys.game.globals.bgMusic = this.bgMusic;
		}
	}

	centerButton(gameObject, offset = 0) {
		Phaser.Display.Align.In.Center(
			gameObject,
			this.add.zone(config.width / 2, config.height / 2 - offset * 100, config.width, config.height)
		);
	}

	centerButtonText(gameText, gameButton) {
		Phaser.Display.Align.In.Center(
			gameText,
			gameButton
		);
	}
};