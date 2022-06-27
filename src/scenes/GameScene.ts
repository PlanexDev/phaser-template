export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }

  create() {
    // display the Phaser version
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: "#000000",
        fontSize: "24px",
      })
      .setOrigin(1, 0);
  }

  update() {}
}
