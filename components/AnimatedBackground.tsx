"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedBackgroundProps {
  pulseCount?: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ pulseCount = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Number of nodes based on screen width
    const isMobile = width < 768;
    const nodeCount = isMobile ? 18 : 45;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1,
        baseAlpha: Math.random() * 0.2 + 0.1,
      });
    }

    // Faint Floating Glyphs for Parallax
    const glyphs = [
      { text: "{ }", x: width * 0.15, y: height * 0.25, size: 28, speed: 0.15 },
      { text: "< / >", x: width * 0.82, y: height * 0.35, size: 24, speed: 0.2 },
      { text: "+", x: width * 0.22, y: height * 0.72, size: 32, speed: 0.1 },
      { text: "○", x: width * 0.75, y: height * 0.78, size: 30, speed: 0.18 },
      { text: "λ", x: width * 0.48, y: height * 0.18, size: 26, speed: 0.12 },
    ];

    let mouseX = -9999;
    let mouseY = -9999;
    let scrollY = window.scrollY;
    let pulseRadius = 0;
    let pulseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Visibility detection to pause when hidden
    let isTabVisible = !document.hidden;
    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
        render();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let lastTime = performance.now();

    const maxDist = isMobile ? 85 : 120;
    const maxDistSq = maxDist * maxDist;

    const render = () => {
      if (!isTabVisible) return;

      ctx.clearRect(0, 0, width, height);

      // Handle shockwave pulse if triggered
      if (pulseActive) {
        pulseRadius += 8;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200, 255, 0, ${Math.max(0, 0.4 - pulseRadius / 1000)})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (pulseRadius > 1000) {
          pulseActive = false;
          pulseRadius = 0;
        }
      }

      // Draw faint parallax floating geometric glyphs
      ctx.font = "bold 20px 'Space Grotesk', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      glyphs.forEach((g) => {
        const py = (g.y - scrollY * g.speed) % (height + 100);
        const drawY = py < -50 ? height + 50 : py;
        ctx.fillStyle = "rgba(200, 255, 0, 0.04)";
        ctx.fillText(g.text, g.x, drawY);
      });

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around boundaries
        if (node.x < 0) node.x = width;
        else if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        else if (node.y > height) node.y = 0;

        // Mouse gentle repel/attract
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 18000 && distSq > 0) {
          const force = (18000 - distSq) / 18000;
          node.x -= (dx / Math.sqrt(distSq)) * force * 1.2;
          node.y -= (dy / Math.sqrt(distSq)) * force * 1.2;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 255, 0, ${node.baseAlpha})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = node.x - other.x;
          const ndy = node.y - other.y;
          const dSq = ndx * ndx + ndy * ndy;

          if (dSq < maxDistSq) {
            const alpha = (1 - dSq / maxDistSq) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(200, 255, 0, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Lazy start rendering after initial paint
    const timer = setTimeout(() => {
      render();
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reducedMotion]);

  // Trigger pulse effect when pulseCount changes
  useEffect(() => {
    if (pulseCount > 0 && canvasRef.current) {
      // Trigger shockwave
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgba(200, 255, 0, 0.12)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [pulseCount]);

  if (reducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
