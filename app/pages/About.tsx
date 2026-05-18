import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, BookOpen, Brain, Briefcase, GraduationCap, House } from "lucide-react";

export function About() {
  const skills = [
    {
      category: "Programming",
      items: ["JavaScript", "Go", "SQL"],
    },
  ];

  const experience = [
  // {
  //   title: "Concepteur Développeur d’Applications",
  //   company: "Attineos Applications",
  //   period: "2024",
  //   description:
  //     "Built a domain conformity checker automating DNS validation, SPF/DMARC checks, IP reputation analysis, and external API integrations. Developed an admin dashboard with React and TypeScript, improving system usability and operational visibility.",
  // }
];

  const education = [
    {
      degree: "Concepteur Développeur d’Applications",
      institution: "Campus Saint-Marc",
      year: "2025-2027"
    },
  ];

  const training = [
  // {
  //   name: "Full-Stack Software Engineering",
  //   organization: "Holberton Schools - ALX Africa",
  //   period: "2023 - 2024",
  //   focus:
  //     "Backend systems, data modeling, distributed collaboration",
  // }
];

  const certifications = [
    // "Google Cloud Professional Data Analytics",
    // "APICS CPIM (Certified in Production and Inventory Management)",
    // "Microsoft Certified: Azure AI - Specialty",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            <div className="lg:col-span-3 lg:pr-8">
              <h1 className="text-4xl md:text-6xl mb-6 tracking-tight">
                Delgerbayar Khuderchuluun
              </h1>
              <div className="space-y-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  Working in environments where inefficiencies mean lost time and direct costs gave me a practical perspective: I don’t look at software as just code, but as a tool to solve real-world friction.
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />

                <p>
                  I moved into software engineering because I wanted to build the exact tools I wished I had when facing operational challenges. Today, as a first-year student in a BAC+3 program at Campus Saint-Marc (Zone01), I am fast-tracking my technical skills across:
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                    <li>Full-stack web development</li>
                    <li>Algorithm logic and data manipulation</li>
                    <li>Building clean, crash-resilient backend systems</li>
                  </ul>
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />

                <h3>What I Bring to a Team</h3>
                <p>
                  Even as a junior developer, I don't build features in isolation. I focus on outcomes, write structured code (like zero-dependency Go architectures), and excel at breaking down messy, real-world problems into clear logic.
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />

                <p>
                  <strong>If you are looking for an adaptable junior who understands that software needs to be genuinely useful for the end-user... let's connect.</strong>
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-3" />
              </div>
            </div>
            <div className="relative w-full lg:col-span-1 max-w-sm mx-auto aspect-[2.8/5] bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-2xl shadow-sm lg:sticky lg:top-32 group">
              <ImageWithFallback
                src="/images/Photo-Z01-Delgerbayar-KHUDERCHULUUN-01.jpg"
                alt="Professional profile"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <ImageWithFallback
                src="/images/Photo-Z01-Delgerbayar-KHUDERCHULUUN-01.jpg"
                alt="Professional profile alternative"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-6 h-6" />
            <h2 className="text-3xl tracking-tight">Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 pb-8"
              >
                <h3 className="text-xl mb-1 tracking-tight">{exp.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <span className="text-neutral-600 dark:text-neutral-400">{exp.company}</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">{exp.period}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-3xl tracking-tight">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg mb-4 tracking-tight">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 w-full">
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6" />
                <h2 className="text-3xl tracking-tight">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-xl mb-1 tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{edu.institution}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6" />
                <h2 className="text-3xl tracking-tight">Certifications</h2>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="w-6 h-6" />
                <h2 className="text-3xl tracking-tight">Training</h2>
              </div>
              <div className="space-y-6">
                {training.map((train, index) => (
                  <div key={index}>
                    <h3 className="text-xl mb-1 tracking-tight">
                      {train.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{train.organization}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">{train.period}</p>
                    <p className="text-neutral-600 dark:text-neutral-400">{train.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
