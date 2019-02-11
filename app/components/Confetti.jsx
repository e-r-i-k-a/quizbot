import React, { Component } from 'react';

export default class Confetti extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  };

  componentDidMount() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    const numberOfPieces = 50;
    let lastUpdateTime = Date.now();

    const randomColor = () => {
      const colors = ['#fff1b2', '#eedac5', '#ddc3d8', '#ccacec', '#bb95ff'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const Piece = (x, y) => {
      this.x = x;
      this.y = y;
      this.size = (Math.random() * 0.5 + 0.75) * 15;
      this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
      this.rotation = (Math.PI * 2) * Math.random();
      this.rotationSpeed = (Math.PI * 2) * (Math.random() - 0.5) * 0.001;
      this.color = randomColor();
    };

    const update = () =>  {
      let now = Date.now();
      const dt = now - lastUpdateTime;

      for (let i = pieces.length - 1; i >= 0; i--) {
        const p = pieces[i];
        if (p.y > canvas.height) {
          pieces.splice(i, 1);
          continue;
        }
        p.y += p.gravity * dt;
        p.rotation += p.rotationSpeed * dt;
      };

      while (pieces.length < numberOfPieces) {
        pieces.push(new Piece(Math.random() * canvas.width, -20));
      };

      lastUpdateTime = now;
      setTimeout(update, 1);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach((p) => {
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
        ctx.rotate(p.rotation);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      requestAnimationFrame(draw);
    };

    while (pieces.length < numberOfPieces) {
      pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    update();
    draw();

  }

  render() {
    return (
      <canvas id='canvas' ref={this.canvas}></canvas>
    );
  }
}
