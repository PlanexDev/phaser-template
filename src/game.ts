import "phaser";
import { CONFIG } from "./config";
import GameScene from "./scenes/GameScene";
import PreloadScene from "./scenes/PreloadScene";

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#ffffff",
  scale: {
    parent: "phaser-game",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: CONFIG.game.width,
    height: CONFIG.game.height,
  },
  scene: [PreloadScene, GameScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 400 },
    },
  },
};

window.addEventListener("load", () => {
  const game = new Phaser.Game(config);
});
