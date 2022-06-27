export default abstract class BaseActor extends Phaser.GameObjects.Container {
  body: Phaser.Physics.Arcade.Body;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);

    scene.physics.add.existing(this);
  }
}
