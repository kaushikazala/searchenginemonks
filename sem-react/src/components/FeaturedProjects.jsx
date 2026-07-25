import "../style/FeaturedProjects.css";
import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function FeaturedProjects() {
  return (
    <section
      className="featured-projects"
      id="featured-projects"
    >
      <div className="container">

        <Reveal>
          <div className="projects-header">

            <span className="projects-tag">
              FEATURED PROJECTS
            </span>

            <h2>
              Work That Creates
              <span> Lasting Impact</span>
            </h2>

            <p>
              Explore a selection of projects that showcase our
              expertise in design, development, branding, and
              digital strategy.
            </p>

          </div>
        </Reveal>

        <div className="projects-grid">

          {portfolioData.map((project) => (

            <Reveal key={project.id}>

              <article className="project-card">

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-stack">

                    {project.technologies.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  <button className="project-link">
                    View Case Study
                    <ArrowUpRight size={18} />
                  </button>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}