export class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);

      scene.sys.updateList.add(this);
      scene.sys.displayList.add(this);
      this.setScale(2);
      scene.physics.world.enableBody(this);
      this.setImmovable(true);
      this.hp = 10;
  }
}