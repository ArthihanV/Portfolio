import React from "react";
import ProjectCard from "../components/ProjectCard";

const localProjects = [
  {
    id: 1,
    title: "Hospital Management System",
    short_description: "A complete hospital management system built using Python, Django, SQLite, HTML, CSS, and JavaScript.",
    technologies: "Python, Django, SQLite, HTML, CSS, JS",
    live_demo: "#",
    source_code: "#",
  },
  {
    id: 2,
    title: "System & SpotStar Web App",
    short_description: "A stylish web application created using HTML, CSS, and JavaScript.",
    technologies: "HTML, CSS, JS",
    live_demo: "#",
    source_code: "#",
  },
  {
    id: 3,
    title: "To-Do List Application",
    short_description: "Task management app using Django, Python, SQLite, HTML, CSS, and JavaScript.",
    technologies: "Python, Django, SQLite, HTML, CSS, JS",
    live_demo: "#",
    source_code: "#",
  },
];

export default function Projects() {
  return (
    <section className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
