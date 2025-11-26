"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[var(--color-light-neutral)]">
        {/* Faded bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-[var(--color-light-neutral)] to-transparent" />
        
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center lg:pl-10">
            {/* Left: Description */}
            <div className="space-y-7">
              <div className="space-y-5">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    About
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border-light)] to-transparent"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-dark-contrast)]">
                  Designer & Developer
                </h2>
                
                <p className="text-base md:text-lg leading-relaxed max-w-xl text-[var(--color-text-primary)]">
                I craft digital experiences that blend creativity with technical precision. They are intuitive, refined, and shaped by thoughtful design.
                With a foundation in computer science and an early path in biomedical sciences, I approach every build with clarity, curiosity, and an eye for purposeful interaction.
                </p>

                <p className="text-base md:text-lg leading-relaxed max-w-xl text-[var(--color-text-primary)]">
                My focus is on creating interfaces that feel natural and effortless, balancing aesthetics with usability.
                I'm continually refining my craft, exploring how digital design can foster connection, spark delight, and make technology feel more human.
                </p>
              </div>
              
              <div className="space-y-5 pt-4">
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:your-email@example.com"
                    className="group relative px-10 py-4 bg-[var(--color-button-primary)] text-white rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    style={{ boxShadow: 'var(--shadow-primary)' }}
                  >
                    <span className="relative z-10">Let&apos;s Connect</span>
                    <div className="absolute inset-0 bg-[var(--color-button-primary-hover)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-white/80 backdrop-blur-md text-[var(--color-text-primary)] rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 hover:-translate-y-1 border-[var(--color-border-medium)] hover:border-[var(--color-border-dark)]"
                    style={{ boxShadow: 'var(--shadow-secondary)' }}
                  >
                    <span className="relative z-10">Github</span>
                  </a>
                  <a
                    href="https://behance.net/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-white/80 backdrop-blur-md text-[var(--color-text-primary)] rounded-xl text-sm font-semibold tracking-wide border transition-all duration-300 hover:-translate-y-1 border-[var(--color-border-medium)] hover:border-[var(--color-border-dark)]"
                    style={{ boxShadow: 'var(--shadow-secondary)' }}
                  >
                    <span className="relative z-10">Behance</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Photo with overlapping cards */}
            <div className="relative flex justify-center lg:justify-end lg:pr-10">
              <div className="relative w-full max-w-[300px]">
                {/* Back card - largest, most rotated */}
                <div className="absolute inset-0 -translate-x-4 translate-y-4">
                  <div className="aspect-[3/4] w-full rounded-xl bg-gradient-to-br from-[var(--color-dusty-pink)]/30 via-[var(--color-dusty-pink)]/20 to-[var(--color-dusty-pink)]/15 transform rotate-6 border border-[var(--color-border-light)]"></div>
                </div>
                
                {/* Middle card - medium rotation */}
                <div className="absolute inset-0 -translate-x-2 translate-y-2 z-10">
                  <div className="aspect-[3/4] w-full rounded-xl bg-gradient-to-br from-[var(--color-dusty-pink)]/40 via-[var(--color-dusty-pink)]/30 to-[var(--color-dusty-pink)]/25 transform -rotate-3 border border-[var(--color-border-medium)] shadow-lg"></div>
                </div>
                
                {/* Front card - main photo */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[var(--color-primary)] shadow-2xl z-20">
                  <Image
                    src="/assets/casilynzirui.jpg"
                    alt="Casilyn Zirui Soong"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Info below photo */}
                <div className="mt-10 space-y-3 relative z-20">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-[var(--color-dark-contrast)]">Casilyn Zirui Soong</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">Creative developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
