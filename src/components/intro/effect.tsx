import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Coordinate {
  x: number;
  y: number;
}

const Effect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const particlesArray: Array<any> = [];
  let hue = 0;
  let frame = 0;

  const [ctx, setCtx] = useState<any>();

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    setCtx(canvas.getContext('2d'));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  const mouse: Coordinate = {
    x: 0,
    y: 0,
  };

  const handleClickCanvas = (e: React.MouseEvent<HTMLCanvasElement>) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    hue += 8;
    if (particlesArray.length < 100) {
      for (let i = 0; i < 20; i++) {
        particlesArray.push(new Particle());
      }
    }
  };
  const handleMoveCanvas = (e: React.MouseEvent<HTMLCanvasElement>) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    hue += 2;
    if (frame % 2 === 0) {
      for (let i = 0; i < 7; i++) {
        particlesArray.push(new Particle());
      }
    }
  };

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 10 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
      if (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  const handleParticles = () => {
    for (let i = 0; i < particlesArray.length; i++) {
      for (let j = i; j < particlesArray.length; j++) {
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particlesArray[i].color;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
      particlesArray[i].update();
      particlesArray[i].draw();

      if (particlesArray[i].size <= 0.3) {
        particlesArray.splice(i, 1);
        i--;
      }
    }
  };

  const handleAnimate = () => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      frame++;
      requestAnimationFrame(handleAnimate);
    }
  };
  useEffect(() => {
    if (ctx) {
      handleAnimate();
      return () => {
        handleAnimate();
      };
    }
  }, [ctx]);

  return (
    <EffectBlock
      ref={canvasRef}
      id="canvas"
      onClick={handleClickCanvas}
      onMouseMove={handleMoveCanvas}
    ></EffectBlock>
  );
};

const EffectBlock = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

export default Effect;
