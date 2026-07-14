export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col border border-[var(--color-border-strong)] p-6 md:p-8 bg-transparent transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-lg group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {project.title}
        </h3>
        <span className="text-xs font-mono tracking-widest text-[var(--color-primary)]">{project.year}</span>
      </div>
      
      <p className="text-sm md:text-base text-[var(--color-text-body)] leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="text-[0.65rem] font-mono tracking-wider px-2 py-1 bg-[var(--color-surface-subtle)] text-[var(--color-text-subtle)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto border-t border-[var(--color-border-light)] pt-4">
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            SOURCE
          </a>
        )}
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            VISIT
          </a>
        )}
      </div>
    </div>
  );
}