import React, { Component } from 'react';

const endText = 'congratulations!'

function spanSplit(str) {
  const midpoint = Math.floor((str.length - 1) / 2)
  return str.split('').map((letter, i) => (
    <span className='end-letter' key={i} style={{ '--delay': i <= midpoint ? i : str.length - 1 - i }}>{letter}</span>
  ))
}

export default class End extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pieces = [];
    const numberOfPieces = 50;
    let lastUpdateTime = Date.now();
    function randomColor() {
      const colors = ['#fff1b2', '#eedac5', '#ddc3d8', '#ccacec', '#bb95ff'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    function update() {
      let now = Date.now(),
        dt = now - lastUpdateTime;
      for (let i = pieces.length - 1; i >= 0; i--) {
        const p = pieces[i];
        if (p.y > canvas.height) {
          pieces.splice(i, 1);
          continue;
        }
        p.y += p.gravity * dt;
        p.rotation += p.rotationSpeed * dt;
      }
      while (pieces.length < numberOfPieces) {
        pieces.push(new Piece(Math.random() * canvas.width, -20));
      }
      lastUpdateTime = now;
      setTimeout(update, 1);
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(function (p) {
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
        ctx.rotate(p.rotation);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      requestAnimationFrame(draw);
    }
    function Piece(x, y) {
      this.x = x;
      this.y = y;
      this.size = (Math.random() * 0.5 + 0.75) * 15;
      this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
      this.rotation = (Math.PI * 2) * Math.random();
      this.rotationSpeed = (Math.PI * 2) * (Math.random() - 0.5) * 0.001;
      this.color = randomColor();
    }
    while (pieces.length < numberOfPieces) {
      pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
    }
    update();
    draw();
  }

  render() {
    const yes = this.props.yes
    const no = this.props.no
    let paragraph = (yes > no) ?
      <div id='end-text'>
        <p id='end-heading'>You're definitely a camel!</p>
        <p>Don't let anyone tell you that you're anything less.</p>
        <p id='emoji'>&#x1F42B;&#x1F42B;&#x1F42B;</p>
      </div>
      :
      <div id='end-text'>
        <p id='end-heading'><bold>You're probably a camel!</bold></p>
        <p>There's no way to be completely sure.  Even if you're not a camel, don't let others define what you know yourself to be.</p>
        <p id='emoji'>&#x1F42B;&#x1F42B;&#x1F42B;</p>
      </div>

    return (
      <div id='end'>
        <canvas id='canvas'></canvas>
        <div id='end-title'>
          <span className='end-letters'>{spanSplit(endText)}</span>
          {paragraph}
        </div>
      </div>
    )
  }
}
