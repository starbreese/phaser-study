import { CST } from "../CST"
export class LoadScene extends Phaser.Scene{
  constructor() {
    super({
      key: CST.SCENES.LOAD
    });
  }
  init() {

  }
  loadImages() {
    this.load.setPath("./assets/image");

    for (let prop in CST.IMAGE) {
        //@ts-ignore
        this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
    }
  }
  loadAudio() {
      this.load.setPath("./assets/audio");

      for (let prop in CST.AUDIO) {
          //@ts-ignore
          this.load.audio(CST.AUDIO[prop], CST.AUDIO[prop]);
      }
  }
  loadSprites(frameConfig) {
      this.load.setPath("./assets/sprite");

      for (let prop in CST.SPRITE) {
          //@ts-ignore
          this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
      }
  }
  preload() {
    this.load.spritesheet("anna", "./assets/sprite/anna.png", {frameHeight: 64, frameWidth: 64});
    //load atlases
    this.load.atlas("characters", "./assets/sprite/characters.png", "./assets/sprite/characters.json")
    this.load.atlas("daze", "./assets/sprite/daze.png", "./assets/sprite/daze.json")
    this.load.spritesheet("rapier", "./assets/sprite/WEAPON_rapier.png", {frameHeight: 192, frameWidth: 192});

    //load image, spritesheet, sound
    this.loadAudio();
    this.loadSprites({
        frameHeight: 32,
        frameWidth: 32
    });
    this.loadImages();

    // //create loading bar

    let loadingBar = this.add.graphics({
        fillStyle: {
            color: 0xffffff //white
        }
    })

    this.load.on("progress", (percent) => {
        loadingBar.fillRect(this.game.renderer.width / 2, 0, 50, this.game.renderer.height * percent);
        console.log(percent);
    })
  }
  create() {
    console.log(111)
    this.scene.start(CST.SCENES.MENU);
  }
}