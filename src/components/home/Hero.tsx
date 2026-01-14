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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-brand-blue/5">
      {/* Animated Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Brain/Neural Network Visual - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          {/* Brain outline with neural connections */}
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4A84B" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Stylized brain shape */}
          <path
            d="M200 50 C280 50 340 100 350 170 C360 240 320 300 280 330 C240 360 160 360 120 330 C80 300 40 240 50 170 C60 100 120 50 200 50"
            stroke="url(#brainGradient)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Neural network nodes */}
          <circle cx="200" cy="120" r="8" fill="#0066FF" opacity="0.6" />
          <circle cx="150" cy="160" r="6" fill="#0066FF" opacity="0.5" />
          <circle cx="250" cy="160" r="6" fill="#0066FF" opacity="0.5" />
          <circle cx="120" cy="220" r="5" fill="#D4A84B" opacity="0.6" />
          <circle cx="280" cy="220" r="5" fill="#D4A84B" opacity="0.6" />
          <circle cx="170" cy="260" r="7" fill="#0066FF" opacity="0.5" />
          <circle cx="230" cy="260" r="7" fill="#0066FF" opacity="0.5" />
          <circle cx="200" cy="200" r="10" fill="#D4A84B" opacity="0.7" />
          
          {/* Connections */}
          <line x1="200" y1="120" x2="150" y2="160" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="120" x2="250" y2="160" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
          <line x1="150" y1="160" x2="120" y2="220" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
          <line x1="250" y1="160" x2="280" y2="220" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
          <line x1="150" y1="160" x2="200" y2="200" stroke="#D4A84B" strokeWidth="1" opacity="0.4" />
          <line x1="250" y1="160" x2="200" y2="200" stroke="#D4A84B" strokeWidth="1" opacity="0.4" />
          <line x1="200" y1="200" x2="170" y2="260" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
          <line x1="200" y1="200" x2="230" y2="260" stroke="#0066FF" strokeWidth="1" opacity="0.3" />
          <line x1="120" y1="220" x2="170" y2="260" stroke="#D4A84B" strokeWidth="1" opacity="0.3" />
          <line x1="280" y1="220" x2="230" y2="260" stroke="#D4A84B" strokeWidth="1" opacity="0.3" />
          
          {/* Transformer attention arcs */}
          <path d="M150 160 Q200 140 250 160" stroke="#D4A84B" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4 2" />
          <path d="M120 220 Q200 180 280 220" stroke="#0066FF" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 2" />
          <path d="M170 260 Q200 240 230 260" stroke="#D4A84B" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4 2" />
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
            <Button 
              href="https://t.me/greybrainsoai" 
              variant="secondary" 
              size="lg"
              target="_blank"
            >
              Join Community
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="mt-10 text-sm text-gray-400 font-sans">
            Trusted by 500+ Doctors · IIHMR Bangalore Partner · Top Voice in AI
          </p>
        </div>
      </div>
    </section>
  );
}
