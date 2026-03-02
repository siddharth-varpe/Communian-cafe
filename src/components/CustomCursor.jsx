import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Set canvas to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let particles = [];
        const maxParticles = 80;

        // Theme colors: Olive and Muted Green 
        const colors = [
            'rgba(85, 107, 47, ',   // Accent Olive
            'rgba(143, 151, 121, ', // Accent Muted Green
            'rgba(139, 90, 43, '    // Accent Soft Brown
        ];

        let mouse = {
            x: null,
            y: null
        };

        class Particle {
            constructor(x, y) {
                // Slightly random offset around mouse
                this.x = x + (Math.random() - 0.5) * 15;
                this.y = y + (Math.random() - 0.5) * 15;
                // Make them distinct squares (pixels)
                this.size = Math.random() * 4 + 4;

                // Random velocity so particles drift slightly while trailing
                this.speedX = (Math.random() - 0.5) * 1;
                this.speedY = (Math.random() - 0.5) * 1 + 0.5; // Slight drift downwards

                this.colorBase = colors[Math.floor(Math.random() * colors.length)];
                this.life = 1.0;
                this.decay = Math.random() * 0.02 + 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= this.decay;
                // Also shrink the square over time
                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                ctx.fillStyle = `${this.colorBase}${this.life})`;
                // Draw sharp pixels (squares) instead of circles
                ctx.fillRect(this.x, this.y, this.size, this.size);
            }
        }

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Add a couple of squares per mouse movement tick for denser trail
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(mouse.x, mouse.y));
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Remove dead particles
                if (particles[i].life <= 0 || particles[i].size <= 0) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            // Keep array size manageable to prevent lag
            if (particles.length > maxParticles) {
                particles = particles.slice(particles.length - maxParticles);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pixel-trail-canvas"
        />
    );
};

export default CustomCursor;
