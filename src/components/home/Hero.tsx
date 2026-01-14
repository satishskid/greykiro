"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let neurons: Neuron[] = [];

    class Neuron {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulsePhase: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += 0.02;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 255, ${0.4 + pulse * 0.2})`;
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      neurons = [];
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 8000);
      for (let i = 0; i < Math.min(count, 80); i++) {
        neurons.push(new Neuron(canvas.offsetWidth, canvas.offsetHeight));
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `rgba(0, 102, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      drawConnections();
      neurons.forEach((n) => {
        n.update(canvas.offsetWidth, canvas.offsetHeight);
        n.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Brain Silhouette Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="w-[500px] h-[500px] opacity-[0.03]"
          fill="currentColor"
        >
          <path d="M100 20c-35 0-60 25-65 55-3 20 5 40 20 52-5 8-8 18-5 28 5 15 18 25 35 25h30c17 0 30-10 35-25 3-10 0-20-5-28 15-12 23-32 20-52-5-30-30-55-65-55zm-20 140c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18zm40 0c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z" />
        </svg>
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-[1.1] mb-6">
            Upgrade Your{" "}
            <span className="text-brand-blue">Biological Intelligence</span>{" "}
            with{" "}
            <span className="text-brand-gold">Artificial Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-sans max-w-xl">
            Bridging Medical Science, Vedic Wisdom, and Generative AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/academy" variant="primary" size="lg">
              Explore The Academy
            </Button>
            <Button href="/lab" variant="secondary" size="lg">
              Enter The Lab
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="mt-10 text-sm text-gray-400 font-sans">
            Trusted by 500+ Doctors · Read on Medium · Top Voice in AI
          </p>
        </div>
      </div>
    </section>
  );
}
