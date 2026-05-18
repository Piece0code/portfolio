import { Link } from "react-router";
import { ArrowRight, BarChart3, Cpu, Package, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const featuredProjects = [
  {
    id: 1,
    title: "Groupie Tracker",
    description:
      "Groupie Trackers consists of receiving a given API and manipulating the data contained in it in order to create a website displaying the information.",
    image:
      "/images/Groupie-tracker/image.png",
    tags: ["Go", "HTML"],
    content: "Groupie Trackers is a dynamic web application built entirely with Go's standard library that aggregates, processes, and visualizes complex data from a multi-endpoint music industry API. The platform transforms raw, relational data—encompassing artist biographies, concert locations, performance dates, and their interconnected relationships—into a seamless, user-friendly data visualization experience.",
  },
  {
    id: 2,
    title: "Net-Cat",
    description:
      "A high-concurrency, zero-dependency TCP chat server engineered in Go that mimics NetCat utility behavior to support multi-client group communication.",
    image:
      "/images/Net-cat/Screenshot 2026-05-18 142936.png",
    tags: ["Go"],
    content: "Engineered a high-concurrency, zero-dependency TCP chat server using Go's native networking capabilities (net) to replicate core NetCat utility behaviors across a multi-client architecture. Leveraging a robust system of Go-routines, channels, and mutexes, the server safely manages concurrent state, broadcasts real-time messages simultaneously, and enforces a strict 10-client connection limit. The system features dynamic session tracking to instantly notify the group when users join, leave, or update usernames, while a central message history buffer ensures newly connected clients are seamlessly brought up to speed with past logs. Built with rigorous server-side validation and error handling, the platform guarantees 100% uptime, flawlessly formats cryptographic timestamps, and blocks empty data transmissions to keep the network efficient and crash-resilient.",
  }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-28 md:py-40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">


            {/* <div className="inline-block mb-4 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full">
              <span className="text-xs tracking-wide text-neutral-700 dark:text-neutral-300">
                Software Engineering  •  Operations & Decision Systems  •  Optimizations
              </span>
            </div>  will need it afterwards when i add competences*/}

            
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
              Building Intelligent
              <br />
              <span className="text-neutral-500 dark:text-neutral-400">Decision Systems</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-2xl">
              Building data-driven systems for inventory, logistics, and operational decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors group"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl mb-12 tracking-tight">
            Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 border rounded-lg hover:shadow-md transition">
              <div className="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 ">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3 tracking-tight">
                Software Systems
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Developing backend and full-stack tools that transform complex logic into usable systems for real-world use-cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Featured Projects
            </h2>
            <Link
              to="/projects"
              className="text-sm tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hidden md:flex items-center gap-2 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group relative cursor-pointer block aspect-[5/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-600 transition-colors"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/95 dark:bg-neutral-900/95 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 dark:bg-neutral-950 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-neutral-400 dark:text-neutral-500 mb-8 max-w-2xl mx-auto">
            Something
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-neutral-100 text-neutral-900 dark:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-colors"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}