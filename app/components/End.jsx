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
    return (
      <div id='end'>
        <canvas id='canvas'></canvas>
        <div id='end-text'>
        <span className='end-letters'>{spanSplit(endText)}</span>
          <p>lorem ipsum</p>
        </div>
      </div>
    )
  }
}

// const End = (props) => {
//   let canvas = document.getElementById('canvas')
//   console.log(canvas)
//   return (
//     <div id='end'>
//       <canvas id='canvas'></canvas>
//       <span className='end-text'>{spanSplit(endText)}</span>
//       <p>lorem ipsum</p>
//     </div>
//   );
// }

// export default End;
