import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            A collection of hardware design, verification, and embedded systems projects
                            showcasing FPGA development, digital design, and IoT applications.
                        </p>
                    </div>
                </div>
                
                {/* Blog-style project list */}
                <div className="flex flex-col gap-8 max-w-[800px] mx-auto w-full">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                        >
                            <article className="group relative border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                                <div className="flex flex-col gap-3">
                                    {/* Title and date */}
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        {project.dates && (
                                            <span className="text-xs text-muted-foreground whitespace-nowrap mt-1">
                                                {project.dates}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Links */}
                                    {project.links && project.links.length > 0 && (
                                        <div className="flex gap-3 pt-2">
                                            {project.links.map((link, index) => (
                                                <Link
                                                    key={index}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
                                                >
                                                    {link.icon}
                                                    <span>{link.type}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}

