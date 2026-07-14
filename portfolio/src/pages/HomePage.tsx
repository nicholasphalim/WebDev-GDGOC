import React from 'react';

// Helper component for skill cards to handle the hover fill effect with Tailwind
const SkillCard = ({ name, percent }: { name: string; percent: string }) => (
  <div 
    className="relative flex justify-between items-center px-4 py-2 border border-[var(--color-border-strong)] transition-all duration-200 overflow-hidden group cursor-default"
    style={{ '--percent': percent } as React.CSSProperties}
  >
    {/* Background fill that expands on hover */}
    <div className="absolute inset-y-0 left-0 bg-[var(--color-primary)] transition-all duration-300 w-0 group-hover:w-[var(--percent)] -z-10"></div>
    <span className="font-bold relative z-10 text-[var(--color-text)] group-hover:text-[var(--color-text)]">{name}</span>
    <span className="relative z-10 text-[var(--color-text)] group-hover:text-[var(--color-text)]">{percent}</span>
  </div>
);

export default function HomePage() {
  return (
    <main className="mt-16">
      {/* HERO SECTION */}
      <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-5 py-8 md:px-8 md:py-8 lg:px-28 lg:pb-12 lg:pt-8 bg-[linear-gradient(to_right,var(--color-surface-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-surface-grid)_1px,transparent_1px)] bg-[size:44px_44px]">
        <div className="max-w-[1100px] w-full mx-auto">
          <p className="text-[0.6rem] md:text-xs text-[var(--color-primary)] tracking-[0.2em] md:tracking-[0.35em] mb-10 md:mb-14">
            // PORTFOLIO_WEBSITE &gt; BOOT_COMPLETED
          </p>
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[7rem] font-bold leading-none tracking-[-0.02em] text-[var(--color-text)] my-8 md:my-12">
            NICHOLAS <br /><span className="text-[var(--color-primary)]">HALIM</span>
          </h1>
          <p className="text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] tracking-[0.1em] leading-relaxed text-[var(--color-text-body)] mb-10 md:mb-12 max-w-[600px]">
            Sophomore in Information Systems and Technology @ ITB | Aspiring Software Engineer
          </p>

          <div className="flex flex-col md:flex-row gap-5 md:items-center flex-wrap">
            <a href="#skills" className="text-[0.65rem] md:text-xs font-mono font-semibold tracking-[0.2em] px-6 py-[0.85rem] md:px-16 md:py-4 border-2 cursor-pointer no-underline transition-all duration-200 text-center text-[var(--color-bg)] bg-[var(--color-primary)] border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg)]">
              VIEW_SKILLS
            </a>
            <a href="#contact" className="text-[0.65rem] md:text-xs font-mono font-semibold tracking-[0.2em] px-6 py-[0.85rem] md:px-16 md:py-4 border-2 cursor-pointer no-underline transition-all duration-200 text-center text-[var(--color-text)] bg-transparent border-[var(--color-text)] hover:text-[var(--color-bg)] hover:bg-[var(--color-text)]">
              VIEW_CONTACTS
            </a>
          </div>

          <div className="mt-10 md:mt-12 lg:mt-20 flex items-center gap-2 md:gap-4">
            <div className="w-10 h-[2px] bg-[var(--color-primary)]"></div>
            <span className="text-[0.6rem] md:text-xs tracking-[0.1em] md:tracking-[0.2em] text-[var(--color-text-muted)]">SCROLL_TO_EXPLORE</span>
            <div className="flex-1 h-[1px] bg-[var(--color-surface-subtle)]"></div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 border-t-2 border-[var(--color-border-section)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex text-xs tracking-[0.4em] items-center gap-2 md:gap-4 mb-6 flex-wrap md:flex-nowrap">
            <span className="text-[var(--color-primary)]">01</span>
            <div className="w-8 h-[1.5px] bg-[var(--color-primary)]"></div>
            <h2 className="text-xs font-bold text-[var(--color-text)] mb-0">SKILLS.HTML</h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)]"></div>
          </div>
          <h3 className="text-[0.6rem] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.5em] text-[var(--color-text-faint)] mb-8 md:mb-10 lg:mb-16">
            // TECHNICAL SKILLS I'M LEARNING
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-[var(--color-border-section)] p-5 md:p-8 lg:p-16 gap-8 md:gap-10 lg:gap-16">
            <div className="flex flex-col">
              <div className="border-b border-[var(--color-border)] mb-6 lg:mb-12 pb-2">
                <span className="text-[0.65rem] md:text-xs tracking-[0.2em] md:tracking-[0.4em] text-[var(--color-primary)]">[FRONTEND]</span>
              </div>
              <div className="text-xs flex flex-col gap-4">
                <SkillCard name="NEXT.JS" percent="50%" />
                <SkillCard name="TAILWIND_CSS" percent="70%" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="border-b border-[var(--color-border)] mb-6 lg:mb-12 pb-2">
                <span className="text-[0.65rem] md:text-xs tracking-[0.2em] md:tracking-[0.4em] text-[var(--color-primary)]">[BACKEND &amp; DATABASE]</span>
              </div>
              <div className="text-xs flex flex-col gap-4">
                <SkillCard name="MONGODB" percent="10%" />
                <SkillCard name="LARAVEL" percent="0%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 border-t-2 border-[var(--color-border-section)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex text-xs tracking-[0.4em] items-center gap-2 md:gap-4 mb-6 flex-wrap md:flex-nowrap">
            <span className="text-[var(--color-primary)]">02</span>
            <div className="w-8 h-[1.5px] bg-[var(--color-primary)]"></div>
            <h2 className="text-xs font-bold text-[var(--color-text)] mb-0">CONTACT.HTML</h2>
            <div className="flex-1 h-[1px] bg-[var(--color-border)]"></div>
          </div>
          <h3 className="text-[0.6rem] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.5em] text-[var(--color-text-faint)] mb-8 md:mb-10 lg:mb-16">
            // CONTACT ME THROUGH THESE LINKS
          </h3>
          
          <div className="w-full lg:max-w-[45%] border-2 border-[var(--color-border-section)] font-mono">
            <div className="flex items-center border-b border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 md:px-5 md:py-3 gap-2">
              <div className="w-3 h-3 rounded-full border border-[var(--color-border)] bg-[var(--color-primary)]"></div>
              <div className="w-3 h-3 rounded-full border border-[var(--color-border)]"></div>
              <div className="w-3 h-3 rounded-full border border-[var(--color-border)]"></div>
              <span className="text-[0.55rem] md:text-[0.6rem] lg:text-xs tracking-[0.2em] ml-2 lg:ml-4 text-[var(--color-text)]">nicholashalim_contact_terminal</span>
            </div>
            
            <div className="p-6 md:p-8 lg:px-10 lg:py-12">
              <p className="text-xs tracking-[0.2em] text-[var(--color-text-subtle)] mb-4">&gt; type contact.txt</p>
              <p className="text-[0.75rem] md:text-[0.85rem] tracking-[0.1em] leading-[1.8] md:leading-loose text-[var(--color-text-body)]">
                Currently open to internships, collaborations, 
                and interesting conversations about technology, design, 
                and the overlap between the two. Don't hesitate to reach out.
              </p>
              <div className="w-full h-[1px] bg-[var(--color-border)] my-6"></div>

              <div className="flex flex-col gap-3 items-start">
                <div className="flex gap-4 items-center">
                  <span className="text-xs tracking-[0.2em] text-[var(--color-text-subtle)]">&gt; </span>
                  <a href="https://github.com/nicholasphalim" target="_blank" rel="noopener noreferrer" className="text-[0.65rem] md:text-xs text-[var(--color-primary)] no-underline tracking-[0.1em] hover:text-[var(--color-primary-dark)] hover:underline hover:underline-offset-2 transition-all duration-100">open --github</a>
                  <span className="text-[0.6rem] md:text-[0.7rem] tracking-[0.1em] text-[var(--color-text-subtle)]"># GITHUB</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-xs tracking-[0.2em] text-[var(--color-text-subtle)]">&gt; </span>
                  <a href="https://www.linkedin.com/in/nicholasphalim/" target="_blank" rel="noopener noreferrer" className="text-[0.65rem] md:text-xs text-[var(--color-primary)] no-underline tracking-[0.1em] hover:text-[var(--color-primary-dark)] hover:underline hover:underline-offset-2 transition-all duration-100">open --linkedin</a>
                  <span className="text-[0.6rem] md:text-[0.7rem] tracking-[0.1em] text-[var(--color-text-subtle)]"># LINKEDIN</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-xs tracking-[0.2em] text-[var(--color-text-subtle)]">&gt; </span>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicholashalim28@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[0.65rem] md:text-xs text-[var(--color-primary)] no-underline tracking-[0.1em] hover:text-[var(--color-primary-dark)] hover:underline hover:underline-offset-2 transition-all duration-100">send --gmail</a>
                  <span className="text-[0.6rem] md:text-[0.7rem] tracking-[0.1em] text-[var(--color-text-subtle)]"># GMAIL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}