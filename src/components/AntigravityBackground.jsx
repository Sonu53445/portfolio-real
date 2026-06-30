import React, { useEffect, useRef } from 'react';

const AntigravityBackground = ({
  count = 180,
  magnetRadius = 5,
  ringRadius = 6,
  waveSpeed = 0.35,
  waveAmplitude = 0.6,
  particleSize = 0.8,
  lerpSpeed = 0.04,
  color = '#FFFFFF',
  rotationSpeed = 0.02,
  depthFactor = 0.8,
  pulseSpeed = 2,
  particleVariance = 0.3,
  fieldStrength = 15,
  autoAnimate = true
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: particleSize + Math.random() * particleVariance,
        angle: Math.random() * Math.PI * 2,
        speed: waveSpeed + Math.random() * 0.1,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01 * (autoAnimate ? 1 : 0);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      particles.forEach(p => {
        const waveX = Math.sin(p.angle + time * p.speed) * waveAmplitude * fieldStrength;
        const waveY = Math.cos(p.angle + time * p.speed) * waveAmplitude * fieldStrength;
        
        const targetX = p.baseX + waveX + Math.sin(time * rotationSpeed + p.angle) * ringRadius * magnetRadius;
        const targetY = p.baseY + waveY + Math.cos(time * rotationSpeed + p.angle) * ringRadius * magnetRadius;

        p.x += (targetX - p.x) * lerpSpeed;
        p.y += (targetY - p.y) * lerpSpeed;

        const pulse = Math.sin(time * pulseSpeed + p.angle) * depthFactor;
        const currentSize = Math.max(0.1, p.size + pulse);

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, magnetRadius, ringRadius, waveSpeed, waveAmplitude, particleSize, lerpSpeed, color, rotationSpeed, depthFactor, pulseSpeed, particleVariance, fieldStrength, autoAnimate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ background: 'transparent' }}
    />
  );
};

export default AntigravityBackground;
