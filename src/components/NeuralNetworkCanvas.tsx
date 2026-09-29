import React, { useEffect, useRef } from 'react';

interface NeuralNetworkCanvasProps {
  isDarkMode: boolean;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  layer: number;
}

interface Pulse {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export const NeuralNetworkCanvas: React.FC<NeuralNetworkCanvasProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive synaptic attraction
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const initNodes = () => {
      nodes = [];
      pulses = [];

      // Determine node count based on screen area
      const density = Math.max(35, Math.floor((width * height) / 22000));
      const nodeCount = Math.min(density, 75);

      for (let i = 0; i < nodeCount; i++) {
        const baseRadius = Math.random() * 2 + 1.8;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          pulsePhase: Math.random() * Math.PI * 2,
          layer: Math.floor(Math.random() * 4),
        });
      }
    };

    initNodes();

    let lastPulseTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Trigger occasional neural pulses along active connections
      if (time - lastPulseTime > 400 && nodes.length > 2) {
        lastPulseTime = time;
        if (pulses.length < 18) {
          const src = Math.floor(Math.random() * nodes.length);
          // find a close neighbor
          let closest = -1;
          let minD = 160;
          for (let j = 0; j < nodes.length; j++) {
            if (j === src) continue;
            const dx = nodes[src].x - nodes[j].x;
            const dy = nodes[src].y - nodes[j].y;
            const dist = Math.hypot(dx, dy);
            if (dist < minD) {
              minD = dist;
              closest = j;
            }
          }
          if (closest !== -1) {
            pulses.push({
              sourceIndex: src,
              targetIndex: closest,
              progress: 0,
              speed: 0.012 + Math.random() * 0.015,
            });
          }
        }
      }

      // Update and draw connections (synapses)
      const maxDistance = 145;

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move nodes
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce from boundaries gently
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Mouse interaction: subtle push and connect
        const mouseDx = mouse.x - nodeA.x;
        const mouseDy = mouse.y - nodeA.y;
        const mouseDist = Math.hypot(mouseDx, mouseDy);
        if (mouseDist < mouse.radius) {
          const angle = Math.atan2(mouseDy, mouseDx);
          const force = (mouse.radius - mouseDist) / mouse.radius;
          nodeA.x -= Math.cos(angle) * force * 0.8;
          nodeA.y -= Math.sin(angle) * force * 0.8;

          // Synapse to mouse
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isDarkMode
            ? `rgba(168, 85, 247, ${(1 - mouseDist / mouse.radius) * 0.5})`
            : `rgba(99, 102, 241, ${(1 - mouseDist / mouse.radius) * 0.4})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Connect with other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * (isDarkMode ? 0.35 : 0.22);
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            if (isDarkMode) {
              // Subtle gradient synapse: indigo to purple/cyan
              const grad = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
              grad.addColorStop(0, `rgba(99, 102, 241, ${alpha})`);
              grad.addColorStop(1, `rgba(168, 85, 247, ${alpha})`);
              ctx.strokeStyle = grad;
            } else {
              ctx.strokeStyle = `rgba(100, 116, 139, ${alpha})`;
            }

            ctx.lineWidth = (1 - distance / maxDistance) * 1.3;
            ctx.stroke();
          }
        }
      }

      // Draw moving synaptic action potential pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const nodeA = nodes[pulse.sourceIndex];
        const nodeB = nodes[pulse.targetIndex];
        if (!nodeA || !nodeB) {
          pulses.splice(p, 1);
          continue;
        }

        const px = nodeA.x + (nodeB.x - nodeA.x) * pulse.progress;
        const py = nodeA.y + (nodeB.y - nodeA.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? '#38bdf8' : '#6366f1';
        ctx.shadowColor = isDarkMode ? '#38bdf8' : '#818cf8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes (neurons)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulsePhase += 0.03;
        const pulseFactor = Math.sin(node.pulsePhase) * 0.5 + 1;
        const radius = node.baseRadius * (0.85 + pulseFactor * 0.2);

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode
          ? `rgba(139, 92, 246, ${0.12 * pulseFactor})`
          : `rgba(99, 102, 241, ${0.08 * pulseFactor})`;
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        if (node.layer % 2 === 0) {
          ctx.fillStyle = isDarkMode ? '#a855f7' : '#4f46e5';
        } else {
          ctx.fillStyle = isDarkMode ? '#38bdf8' : '#0284c7';
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-85"
      aria-hidden="true"
    />
  );
};
