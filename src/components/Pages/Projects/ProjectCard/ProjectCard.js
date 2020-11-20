import React from "react";
import "./ProjectCard.scss";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import {
  renderThirdParty,
  renderFeatures,
  renderProjectSpecifics,
} from "../functions/functions";

function ProjectCard({
  backCardHeight,
  setFrontSideActive,
  frontSideActive,
  project,
  language,
  toggleTechInfoFeatures,
  id,
}) {
  return (
    <>
      <div
        className="ProjectCard"
        aria-label="project card"
        style={{ height: backCardHeight }}
        onMouseLeave={() => setFrontSideActive(true)}
      >
        {/* CARD FRONT */}
        <div
          className="card__side card__side--front"
          style={
            !frontSideActive && project.id === id
              ? { transform: "rotateY(180deg)" }
              : null
          }
        >
          {/* Project Name */}
          <p className="project-name">{project.name}</p>

          {/* IMG */}
          <figure className="project-screenshot">
            <a href={project.live} rel="noopener noreferrer" target="_blank">
              <img src={project.img} alt="app screenshot" />
            </a>
          </figure>

          {/* DESCRIPTION TEXT FRONT*/}
          <div className="container__text-section">
            <section className="description"> {project.description[language]}</section>

            {/* FEATURES FRONT*/}
            <section className="features">
              <h4>{language === "en" ? "Features:" : "Eigenschaften"}</h4>
              <ul>{renderFeatures(project, language)}</ul>
            </section>

            {/* BUTTON FLIP CARD */}
            <div className="btn__flip-card">
              <button onClick={() => toggleTechInfoFeatures(project.id)}>
                Tech Info {">"}
              </button>
            </div>
          </div>
        </div>
        {/* END card front****************  */}

        {/* CARD BACK */}
        <div
          className="card__side card__side--back"
          style={
            !frontSideActive && project.id === id ? { transform: "rotate(0)" } : null
          }
        >
          <section className="container__text-section">
            {/* TECH INFO */}
            <h2>{language === "en" ? "Technical Info:" : "Technische Info"}</h2>
            <p>{`${project.techInfo.main}`}</p>
            <p>{`${project.techInfo.styled}`}</p>
            <p>{project.techInfo.tested && `Tested with ${project.techInfo.tested}`}</p>

            {project.techInfo.responsive && <p>Responsive</p>}
            {project.techInfo.specsText.en && <p>{project.techInfo.specsText.en}</p>}

            {/* SPECIFICS */}
            <h3>{language === "en" ? "Project specifics:" : "Projekt Details"}</h3>
            {renderProjectSpecifics(project)}

            {/* Third Party used in project */}
            <h3>Third party:</h3>
            <ul>{renderThirdParty(project)}</ul>
          </section>

          {/* BUTTON FLIP CARD */}
          <div className="btn__flip-card">
            <button onClick={() => toggleTechInfoFeatures(project.id)}>
              {language === "en" ? "< Features" : "< Eigenschaften"}
            </button>
          </div>
        </div>
      </div>

      {/* LINKS */}
      <ProjectLinks project={project} />
      {/* </main> */}
    </>
  );
}

export default ProjectCard;
