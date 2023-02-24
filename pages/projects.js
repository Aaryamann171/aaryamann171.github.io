import ProjectCard from "../components/project-card";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { projectsData } from "../data/projectsData";

const Projects = () => {

  return (
    <div>
      <Navbar />
      {
      <div className="flex flex-col items-center">
        {
        projectsData.map((project) => {
          return (
            <div key={project.projectName}>
              <ProjectCard
                projectName={project.projectName}
                projectDesc={project.projectDesc}
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                sourceCodeURL={project.sourceCodeURL}
                deploymentURL={project.deploymentURL}
              />
            </div>
          )
        })
        }
      </div> 
      }
      <Footer />
      </div> 
  );
};

export default Projects;
