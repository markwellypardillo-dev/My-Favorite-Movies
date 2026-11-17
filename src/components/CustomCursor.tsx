import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const bracketsRef = useRef<HTMLDivElement | null>(null);
  const centerDotRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Disable custom reticle on coarse / touch devices
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    const trailPositions = Array.from({ length: 4 }, () => ({
      x: mouseX,
      y: mouseY,
    }));

    let hoverMode: 'default' | 'card' | 'magnetic' = 'default';
    let targetRect: DOMRect | null = null;
    let activeMagneticEl: HTMLElement | null = null;
    let rafId = 0;

    const updateCardLightSources = (clientX: number, clientY: number) => {
      const cards = document.querySelectorAll<HTMLElement>('.cinema-light-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Skip off-screen cards
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;

        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const dx = clientX - cardCenterX;
        const dy = clientY - cardCenterY;
        const distance = Math.hypot(dx, dy);

        // Specular sheen relative coordinates inside the card
        const relX = clientX - rect.left;
        const relY = clientY - rect.top;
        card.style.setProperty('--sheen-x', `${relX.toFixed(1)}px`);
        card.style.setProperty('--sheen-y', `${relY.toFixed(1)}px`);

        if (distance < 520) {
          const proximity = Math.max(0, 1 - distance / 520);
          // Opposite-direction 3D floating shadow shift
          const shadowShiftX = (-dx / 28) * proximity;
          const shadowShiftY = (-dy / 28) * proximity + 18;
          const glowAlpha = (0.06 + proximity * 0.18).toFixed(3);
          const sheenAlpha = (proximity * 0.11).toFixed(3);

          card.style.setProperty('--shadow-x', `${shadowShiftX.toFixed(1)}px`);
          card.style.setProperty('--shadow-y', `${shadowShiftY.toFixed(1)}px`);
          card.style.setProperty('--glow-alpha', glowAlpha);
          card.style.setProperty('--sheen-alpha', sheenAlpha);
        } else {
          card.style.setProperty('--shadow-x', '0px');
          card.style.setProperty('--shadow-y', '18px');
          card.style.setProperty('--glow-alpha', '0');
          card.style.setProperty('--sheen-alpha', '0');
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      updateCardLightSources(mouseX, mouseY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cardEl = target.closest<HTMLElement>('[data-cursor="card"]');
      const magneticEl = target.closest<HTMLElement>('[data-cursor="magnetic"]');

      if (magneticEl) {
        hoverMode = 'magnetic';
        targetRect = magneticEl.getBoundingClientRect();
        if (activeMagneticEl && activeMagneticEl !== magneticEl) {
          activeMagneticEl.style.transform = '';
        }
        activeMagneticEl = magneticEl;
        const centerX = targetRect.left + targetRect.width / 2;
        const centerY = targetRect.top + targetRect.height / 2;
        const pullX = Math.max(-5, Math.min(5, (mouseX - centerX) * 0.16));
        const pullY = Math.max(-5, Math.min(5, (mouseY - centerY) * 0.16));
        magneticEl.style.transform = `translate3d(${pullX.toFixed(1)}px, ${pullY.toFixed(1)}px, 0)`;
      } else {
        if (activeMagneticEl) {
          activeMagneticEl.style.transform = '';
          activeMagneticEl = null;
        }
        if (cardEl) {
          hoverMode = 'card';
          targetRect = null;
        } else {
          hoverMode = 'default';
          targetRect = null;
        }
      }
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.25;
      curY += (mouseY - curY) * 0.25;

      const cursorEl = cursorRef.current;
      const bracketsEl = bracketsRef.current;
      const centerDotEl = centerDotRef.current;

      if (cursorEl && bracketsEl && centerDotEl) {
        if (hoverMode === 'card') {
          cursorEl.style.width = '36px';
          cursorEl.style.height = '36px';
          cursorEl.style.borderRadius = '10px';
          cursorEl.style.backgroundColor = 'transparent';
          cursorEl.style.boxShadow = '0 0 24px rgba(225, 29, 72, 0.28)';
          cursorEl.style.transform = `translate3d(${curX - 18}px, ${curY - 18}px, 0)`;
          bracketsEl.style.opacity = '1';
          bracketsEl.style.transform = 'scale(1)';
          centerDotEl.style.opacity = '1';
        } else if (hoverMode === 'magnetic' && targetRect) {
          const w = Math.min(targetRect.width + 10, 240);
          const h = Math.min(targetRect.height + 8, 64);
          const tx = targetRect.left + targetRect.width / 2 - w / 2;
          const ty = targetRect.top + targetRect.height / 2 - h / 2;
          cursorEl.style.width = `${w}px`;
          cursorEl.style.height = `${h}px`;
          cursorEl.style.borderRadius = '12px';
          cursorEl.style.backgroundColor = 'rgba(225, 29, 72, 0.08)';
          cursorEl.style.boxShadow = '0 0 22px rgba(225, 29, 72, 0.3)';
          cursorEl.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
          bracketsEl.style.opacity = '0';
          bracketsEl.style.transform = 'scale(0.75)';
          centerDotEl.style.opacity = '0';
        } else {
          cursorEl.style.width = '10px';
          cursorEl.style.height = '10px';
          cursorEl.style.borderRadius = '9999px';
          cursorEl.style.backgroundColor = 'rgba(225, 29, 72, 0.92)';
          cursorEl.style.boxShadow = '0 0 16px rgba(225, 29, 72, 0.75)';
          cursorEl.style.transform = `translate3d(${curX - 5}px, ${curY - 5}px, 0)`;
          bracketsEl.style.opacity = '0';
          bracketsEl.style.transform = 'scale(0.6)';
          centerDotEl.style.opacity = '0';
        }
      }

      // Update crimson micro-particle trail
      trailPositions.forEach((pos, idx) => {
        const targetX = idx === 0 ? curX : trailPositions[idx - 1].x;
        const targetY = idx === 0 ? curY : trailPositions[idx - 1].y;
        pos.x += (targetX - pos.x) * (0.32 - idx * 0.05);
        pos.y += (targetY - pos.y) * (0.32 - idx * 0.05);

        const dot = trailRefs.current[idx];
        if (dot) {
          const size = Math.max(2, 5 - idx);
          dot.style.transform = `translate3d(${pos.x - size / 2}px, ${pos.y - size / 2}px, 0)`;
          dot.style.opacity = hoverMode === 'default' ? String(0.42 - idx * 0.1) : '0';
        }
      });

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="hidden lg:block fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      {/* Fading Cinema Crimson Micro-Particle Trail */}
      {[0, 1, 2, 3].map((idx) => (
        <div
          key={idx}
          ref={(el) => {
            trailRefs.current[idx] = el;
          }}
          style={{
            width: `${5 - idx}px`,
            height: `${5 - idx}px`,
          }}
          className="fixed top-0 left-0 rounded-full bg-[#E11D48] pointer-events-none transition-opacity duration-150"
        />
      ))}

      {/* Transparent Cinema Viewfinder Reticle (Never blocks poster artwork) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none transition-[width,height,background-color,border-radius,box-shadow] duration-200 ease-out"
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '9999px',
        }}
      >
        {/* 4 Optical Camera Focus Brackets on Card Hover */}
        <div
          ref={bracketsRef}
          className="relative w-full h-full opacity-0 transition-all duration-200 ease-out"
        >
          <svg
            viewBox="0 0 36 36"
            className="w-full h-full overflow-visible drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            {/* Top-Left Corner Bracket */}
            <path
              d="M 2 11 L 2 4 Q 2 2 4 2 L 11 2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            {/* Top-Right Corner Bracket */}
            <path
              d="M 25 2 L 32 2 Q 34 2 34 4 L 34 11"
              fill="none"
              stroke="#FF2E55"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            {/* Bottom-Left Corner Bracket */}
            <path
              d="M 2 25 L 2 32 Q 2 34 4 34 L 11 34"
              fill="none"
              stroke="#FF2E55"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            {/* Bottom-Right Corner Bracket */}
            <path
              d="M 25 34 L 32 34 Q 34 34 34 32 L 34 25"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Tiny Center Focus Point */}
        <div
          ref={centerDotRef}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#FF2E55] shadow-[0_0_10px_#FF2E55] opacity-0 transition-opacity duration-150"
        />
      </div>
    </div>
  );
};

