import { useParams, Link, Navigate } from "react-router";
import { projects } from "../data/projects";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Scroll to top when loading a new project
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!id) return <Navigate to="/projects" replace />;

  const projectIndex = projects.findIndex((p) => p.id === parseInt(id));
  const project = projects[projectIndex];

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="w-full bg-white dark:bg-neutral-950 min-h-screen">
      {/* Project Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight uppercase">
              {project.title}
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-1xl leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-4 py-2 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
            <div className="ml-auto flex gap-4">
              <a
                href={project.code || "#"}
                target={project.code ? "_blank" : undefined}
                rel={project.code ? "noreferrer" : undefined}
                onClick={(e) => !project.code && e.preventDefault()}
                className={`inline-flex items-center gap-2 text-sm transition-colors uppercase tracking-widest ${
                  project.code
                    ? "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    : "text-neutral-400 dark:text-neutral-600 cursor-default opacity-50"
                }`}
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.demo || "#"}
                target={project.demo ? "_blank" : undefined}
                rel={project.demo ? "noreferrer" : undefined}
                onClick={(e) => !project.demo && e.preventDefault()}
                className={`inline-flex items-center gap-2 text-sm transition-colors uppercase tracking-widest ${
                  project.demo
                    ? "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                    : "text-neutral-400 dark:text-neutral-600 cursor-default opacity-50"
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Handles photos, videos, etc. */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-16">
          {/* Main Hero Image */}
          <div className="w-full bg-neutral-100 dark:bg-neutral-900 aspect-[16/9] overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details Writeup */}
          <div className="max-w-1xl">
            <h2 className="text-2xl font-bold mb-6 tracking-tight uppercase">Overview</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                {project.content || project.description}
              </p>
            </div>
          </div>

          {/* Additional Media (Photos, Videos, GIFs) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.additionalMedia ? (
              project.additionalMedia.map((mediaUrl, idx) => (
                <div key={idx} className="bg-neutral-100 dark:bg-neutral-900 aspect-square md:aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={mediaUrl}
                    alt={`${project.title} detailed view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
               <>
                 <div className="bg-neutral-50 dark:bg-neutral-900 aspect-square md:aspect-[4/3] overflow-hidden flex items-center justify-center border border-neutral-100 dark:border-neutral-800 p-8">
                    <p className="text-neutral-400 dark:text-neutral-600 text-sm uppercase tracking-widest text-center">Additional Media <br /> (Upload / Video / GIF here)</p>
                 </div>
                 <div className="bg-neutral-50 dark:bg-neutral-900 aspect-square md:aspect-[4/3] overflow-hidden flex items-center justify-center border border-neutral-100 dark:border-neutral-800 p-8">
                    <p className="text-neutral-400 dark:text-neutral-600 text-sm uppercase tracking-widest text-center">Additional Media <br /> (Upload / Video / GIF here)</p>
                 </div>
               </>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Navigation matching prototype */}
      <section className="py-20 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            <Link
              to="/projects"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              ALL
            </Link>
            
            {projects.map((p) => (
              <div key={p.id} className="flex items-center gap-4">
                <span>/</span>
                <Link
                  to={`/projects/${p.id}`}
                  className={`hover:text-neutral-900 dark:hover:text-white transition-colors ${
                    p.id === project.id ? "text-neutral-900 dark:text-white font-bold" : ""
                  }`}
                >
                  {p.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
