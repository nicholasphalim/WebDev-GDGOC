import { useState } from 'react';
import ProjectCard, { type Project } from '../components/ProjectCard';

// Dummy data to populate the projects page
const initialProjects: Project[] = [
    {
        id: '1',
        title: 'TransUm Dashboard',
        description: 'A real-time IoT Dashboard for Bus & Bus Stop Passenger Counting (Corridor 5). A full-stack application with Next.js and Tailwindcss, using Supabase for backend',
        techStack: ['NEXT.JS', 'TAILWINDCSS', 'SUPABASE', 'ESP32'],
        github: 'https://github.com/nicholasphalim/Transum-Dashboard',
        link: 'https://transum-dashboard.vercel.app/',
        year: '2026'
    },
    {
        id: '2',
        title: 'Portfolio Website',
        description: 'A personal portfolio website designed with a minimalist, terminal-inspired aesthetic. Built with Next.js, Typescript, and Tailwindcss. Complete with CI/CD workflows',
        techStack: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS'],
        github: 'https://github.com/nicholasphalim/nicholas-portfolio-1',
        year: '2026'
    },
    {
        id: '3',
        title: 'Lustre Athletic Website',
        description: "Landing page for a local business specializing in track and field apparel. Features the brand's story and product catalog, with smooth animations",
        techStack: ['NEXT.JS', 'TAILWINDCSS', 'JAVASCRIPT'],
        github: 'https://github.com/fikrifalah/lustre-athletic',
        year: '2025'
    }
];

export default function ProjectsPage() {
    // Using standard useState as requested in the plan
    const [projects] = useState<Project[]>(initialProjects);

    return (
        <main className="min-h-screen pt-24 pb-12 px-5 md:px-8 lg:px-28">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex text-xs tracking-[0.4em] items-center gap-2 md:gap-4 mb-6 flex-wrap md:flex-nowrap">
                    <span className="text-[var(--color-primary)]">01</span>
                    <div className="w-8 h-[1.5px] bg-[var(--color-primary)]"></div>
                    <h2 className="text-xs font-bold text-[var(--color-text)] mb-0">PROJECTS.HTML</h2>
                    <div className="flex-1 h-[1px] bg-[var(--color-border)]"></div>
                </div>

                <h3 className="text-[0.6rem] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.5em] text-[var(--color-text-faint)] mb-10 md:mb-16">
          // A SELECTION OF MY RECENT WORK
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}