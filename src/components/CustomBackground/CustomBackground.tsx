import React, { useEffect, useRef } from "react";

const CustomBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * 1.75;
      canvas.height = window.innerHeight * 1.75;
      context.fillStyle = "#ffffff";
      context.strokeStyle = "#ffffff";
      context.lineWidth = 0.4;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const dots = {
      nb: 0.3 * Math.max(canvas.width, canvas.height),
      distance: Math.min(0.1 * Math.min(canvas.width, canvas.height), 75),
      array: [] as Dot[],
    };

    const mousePosition = { x: -1000, y: -1000 }; // Initially out of bounds to avoid immediate connections

    class Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        if (!canvas) throw new Error("Canvas is not initialized");
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (-0.5 + Math.random()) * 2;
        this.vy = (-0.5 + Math.random()) * 2;
        this.radius = Math.random() * 2.25;
      }

      create() {
        if (!context) return;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
      }

      move() {
        if (!canvas) return;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;

        this.x += this.vx;
        this.y += this.vy;
      }

      drawLines() {
        // Only connect dots that are within the mouse hover distance
        for (let i = 0; i < dots.array.length; i++) {
          const dot = dots.array[i];
          const xDist = this.x - dot.x;
          const yDist = this.y - dot.y;

          const distance = Math.sqrt(xDist ** 2 + yDist ** 2);
          const mouseDistX = mousePosition.x - this.x;
          const mouseDistY = mousePosition.y - this.y;
          const mouseDistance = Math.sqrt(mouseDistX ** 2 + mouseDistY ** 2);

          // Only draw lines if the mouse is near
          if (distance < dots.distance && mouseDistance < dots.distance) {
            if (context) {
              context.beginPath();
              context.moveTo(this.x, this.y);
              context.lineTo(dot.x, dot.y);
              context.stroke();
            }
          }
        }
      }
    }

    const createDots = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (dots.array.length < dots.nb) {
        for (let i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot());
        }
      }

      for (let i = 0; i < dots.array.length; i++) {
        const dot = dots.array[i];
        dot.create();
        dot.move();
        dot.drawLines();
      }

      requestAnimationFrame(createDots);
    };

    canvas.addEventListener("mousemove", (e) => {
      mousePosition.x = e.pageX * 1.75;
      mousePosition.y = e.pageY * 1.75;
    });

    canvas.addEventListener("mouseleave", () => {
      // Reset mouse position when it leaves the canvas
      mousePosition.x = -1000;
      mousePosition.y = -1000;
    });

    createDots();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #0a1621, #104782)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 15,
          pointerEvents: "none",
          opacity: 0.55,
        }}
      />
    </div>
  );
};

export default CustomBackground;
