import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, BookOpen, Brain, Briefcase, GraduationCap, House } from "lucide-react";

export function About() {
  const skills = [
    {
      category: "Programming",
      items: ["JavaScript/TypeScript", "Go", "Python", "C", "Solidity", "R", "SQL"],
    },
    {
      category: "Machine Learning",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Prophet"],
    },
    {
      category: "Optimization",
      items: ["Gurobi", "OR-Tools", "CPLEX", "PuLP", "Genetic Algorithms"],
    },
    {
      category: "Data Engineering",
      items: ["Apache Spark", "Kafka", "Airflow", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Visualization",
      items: ["React", "D3.js", "Tableau", "Plotly", "Power BI"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
    },
  ];

  const experience = [
  {
    title: "Web Developer (Security & Systems)",
    company: "Attineos Applications",
    period: "2024",
    description:
      "Built a domain conformity checker automating DNS validation, SPF/DMARC checks, IP reputation analysis, and external API integrations. Developed an admin dashboard with React and TypeScript, improving system usability and operational visibility.",
  },
  {
    title: "Supply Chain Simulation & Optimization",
    company: "CESI – Logistics 4.0 Lab",
    period: "2021",
    description:
      "Developed simulation models for a multi-modal logistics platform. Improved operational efficiency through data-driven scheduling and system modeling, contributing to cost reduction and high on-time delivery performance.",
  },
  {
    title: "Supply Chain & Process Analyst",
    company: "Lobic Engineering Services",
    period: "2017 - 2018",
    description:
      "Optimized supply chain processes, reducing operational costs and improving efficiency. Led supplier performance analysis and implemented process improvements that reduced risks and enhanced system reliability.",
  },
];

  const education = [
    {
      degree: "B.S in Software Engineering",
      institution: "Campus Saint-Marc",
      year: "2026"
    },
    {
      degree: "M.S. in Industrial Engineering",
      institution: "Grenoble INP",
      year: "2021",
    },
    {
      degree: "B.S. in Industrial Tech",
      institution: "University of Nigeria",
      year: "2014",
    },
  ];

  const training = [
  {
    name: "Full-Stack Software Engineering",
    organization: "Holberton Schools - ALX Africa",
    period: "2023 - 2024",
    focus:
      "Backend systems, data modeling, distributed collaboration",
  },
  {
  name: "Blockchain Architecture & Systems",
  organization: "Althash University",
  period: "2022 - 2023",
  focus: "Distributed systems fundamentals and network structures.",
}
];

  const certifications = [
    "Google Cloud Professional Data Analytics",
    "APICS CPIM (Certified in Production and Inventory Management)",
    "Microsoft Certified: Azure AI - Specialty",
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
                  I didn’t start in tech.
                </p>
                <p>
                  I started in operations, where decisions have real consequences, delays translate into costs, 
                  and inefficiencies can’t hide behind polished interfaces.
                </p>
                <p>
                  I’ve worked on factory floors, within supply chains, 
                  and across logistics systems where a single wrong assumption can lead to missed deliveries, excess inventory, or wasted capital. <br />
                  In one role, I helped reduce costs and significantly improve performance not just through theory, 
                  but by changing how decisions were actually made.
                </p>
                <p>
                  That perspective stayed with me.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />
                <p>
                  Eventually, I moved into "tech".
                </p>
                <p>
                  Not because I wanted to “become a developer,” 
                  but because I needed to build the tools I wish I had when dealing with real operational challenges.
                </p>
                <p>              
                  Since then, my work has spanned:
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Data analysis and decision support</li>
                  <li>Full-stack development</li>
                  <li>Simulation and optimization systems</li>
                  <li>Security-focused applications</li>
                  </ul>
                </p>
                <p>
                  From building a domain conformity checker in a cybersecurity environment to developing dashboards and data pipelines, 
                  there’s been a consistent thread in what I do: <br />
                  <strong>making systems clearer, more reliable, and genuinely useful for decision-making.</strong>
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />
                <p>
                  Today, I’m continuing in that direction through a BAC+3 program at Campus Saint-Marc (Zone01), 
                  while actively building tools at the intersection of:
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>operations</li>
                    <li>data</li>
                    <li>software engineering</li>
                  </ul>
                </p>
                <p>
                  The goal is straightforward: <br />
                    <strong>to design systems that don’t just present information, 
                      but actually help people make better decisions.</strong>
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />
                <p>
                  <h3>What I Do</h3>
                  I build tools and solutions focused on:
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Inventory and supply chain decision support</li>
                    <li>Data-driven operational analysis</li>
                    <li>Backend and full-stack development</li>
                    <li>Process optimization through software</li>
                  </ul>
                </p>
                <p>
                  I’m especially drawn to problems where:
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>data exists but isn’t being used effectively</li>
                    <li>decisions are still manual or reactive</li>
                    <li>small improvements can create meaningful financial impact</li>
                  </ul>
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />
                <p>
                  <h3>What You Can Expect Working With Me</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>I think in systems, not isolated features</li>
                    <li>I focus on outcomes, not just implementation</li>
                    <li>I can move from problem → model → working solution</li>
                    <li>I’m comfortable navigating ambiguity and constraints</li>
                  </ul>
                  And I don’t overcomplicate things just to make them look impressive.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />
                <p>
                  <h3>Where I’m Going</h3>
                  Right now, I’m focused on building decision engines for real operational problems; 
                  starting with inventory systems for e-commerce and growing businesses.
                </p>
                <p>
                  Over time, I’m working toward more complex optimization systems that connect:
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>supply chains</li>
                    <li>data infrastructure</li>
                    <li>decision logic</li>
                  </ul>
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-3" />
                <p>
                  <h3>If You’re Here For a Reason</h3>
                </p>
                <p>
                  If you’re looking for someone who can bridge operations and software,
                  someone who can structure and build around your data,
                  or someone who takes a practical approach to solving messy, real-world problems
                </p>
                <p>
                  <strong>...there’s a good chance we’ll work WELL TOGETHER.</strong>
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-3" />
              </div>
            </div>
            <div className="relative w-full lg:col-span-1 max-w-sm mx-auto aspect-[2.8/5] bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-2xl shadow-sm lg:sticky lg:top-32 group">
              <ImageWithFallback
                src="/images/main_photo.jpeg"
                alt="Professional profile"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <ImageWithFallback
                src="/images/second_photo.jpeg"
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
