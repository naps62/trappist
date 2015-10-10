Template.canvas.onRendered(function() {
  $(document).ready(() => {
    ctx = new Phaser.Game(500, 500, Phaser.AUTO, 'phaserContainer', {
      preload: preload,
      create: create,
      update: update
    });
    window.game.ctx = ctx;
  });

  this.subscribe('signals');
  Signals.find({}).observeChanges({
    added: newSignal
  })
});

window.game = {
  ctx: null,
  justo: null,
  gabriel: null
}


function preload() {
  ctx.load.image('justo', '/assets/justo.png');
  ctx.load.image('gabriel', '/assets/justo.png');
}

function create() {
  game.gabriel = ctx.add.sprite(0, 0, 'gabriel');
  game.gabriel.anchor.setTo(0.5, 0);

  game.justo = ctx.add.sprite(0, ctx.height, 'justo');
  game.justo.anchor.setTo(0.5, 1);

  Helpers.moveToCol(game.gabriel, 3);
  Helpers.moveToCol(game.justo, 3);
}

function update() {
}

function newSignal(id, doc) {
  Helpers.moveToCol(game.gabriel, doc.gabrielResult);
  Helpers.moveToCol(game.justo, doc.justoResult);
}

window.Helpers = {
  moveToCol: (sprite, col) => {
    var colWidth = ctx.width / 5;
    sprite.position.x = colWidth * (col - 0.5);
  }
}
