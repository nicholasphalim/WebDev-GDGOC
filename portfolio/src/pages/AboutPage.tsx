export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-5 md:px-8 lg:px-28">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex text-xs tracking-[0.4em] items-center gap-2 md:gap-4 mb-6 flex-wrap md:flex-nowrap">
          <span className="text-[var(--color-primary)]">01</span>
          <div className="w-8 h-[1.5px] bg-[var(--color-primary)]"></div>
          <h2 className="text-xs font-bold text-[var(--color-text)] mb-0">ABOUT.HTML</h2>
          <div className="flex-1 h-[1px] bg-[var(--color-border)]"></div>
        </div>
        
        <h3 className="text-[0.6rem] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.5em] text-[var(--color-text-faint)] mb-10 md:mb-16">
          // A BRIEF BACKGROUND
        </h3>

        <div className="flex flex-col gap-8 md:gap-12">
          <p className="text-sm md:text-base lg:text-lg leading-loose md:leading-loose text-[var(--color-text-body)]">
            Hello world!, I'm <strong className="text-[var(--color-text)]">Nicholas Halim</strong>, a sophomore currently pursuing a degree in Information Systems & Technology at Institut Teknologi Bandung (ITB). I am deeply passionate about software engineering, particularly in the realm of web development, where I strive to create intuitive and high-performance digital experiences.
          </p>
          
          <div className="w-full lg:max-w-[80%] border-l-2 border-[var(--color-primary)] pl-6 md:pl-10 py-2">
            <p className="text-sm md:text-base lg:text-lg leading-loose md:leading-loose text-[var(--color-text-body)]">
              My journey in tech is driven by a curiosity to understand how things work under the hood and a desire to build solutions that solve real-world problems. I enjoy working across the entire stack, from designing clean, responsive frontend interfaces to architecting robust backend systems.
            </p>
          </div>

          <p className="text-sm md:text-base lg:text-lg leading-loose md:leading-loose text-[var(--color-text-body)]">
            When I'm not coding, I'm usually exploring racket sports, photography, music, or reading up on the latest tech trends. I love combining different fields and disciplines to create something new and innovative.
          </p>

          <div className="mt-8 border border-[var(--color-border-strong)] p-6 md:p-8 font-mono bg-[var(--color-surface)]">
            <p className="text-xs tracking-[0.1em] text-[var(--color-text-subtle)] mb-4">&gt; txt --current-status</p>
            <ul className="flex flex-col gap-3 text-[0.75rem] md:text-sm text-[var(--color-text)] tracking-[0.05em]">
              <li className="flex gap-4"><span className="text-[var(--color-primary)]">Location:</span> Bandung, Indonesia (University) / Tangerang, Indonesia (Home)</li>
              <li className="flex gap-4"><span className="text-[var(--color-primary)]">Education:</span> Institut Teknologi Bandung (ITB)</li>
              <li className="flex gap-4"><span className="text-[var(--color-primary)]">Major:</span> Information Systems and Technology</li>
              <li className="flex gap-4"><span className="text-[var(--color-primary)]">Interests:</span> Full-stack Development, IoT, Photography, Music</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}