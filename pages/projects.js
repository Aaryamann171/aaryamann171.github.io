import Project from "../components/Project";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const backgroudStyle = {
  backgroundColor: "#F6F6F6",
  color: "#000000",
}

const projectsStyle = {
  backgroundColor: "#FFFFFF",
  borderLeft: "2px black solid",
  borderTop: "2px black solid",
  borderBottom: "4px black solid",
  borderRight: "4px black solid",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px"
}

const Projects = () => {
  const projects = [
    {
      projectName: "dbug",
      projectDesc: "An online code review tool developed using Django.",
      imgSrc: "/images/dbug/dbug1.png",
      imgAlt: "dubg1",
      sourceCodeURL: "https://github.com/Aaryamann171/dbug-django",
      deploymentURL:  "http://d-bug.herokuapp.com/"
    },
    {
      projectName: "LaunchPadX",
      projectDesc: "A SpaceX dashboard developed using Next.js and TailwindCSS.",
      imgSrc: "/images/launchpadx/lpx-1.png",
      imgAlt: "lpx",
      sourceCodeURL: "https://github.com/Aaryamann171/LaunchPadX",
      deploymentURL: "https://launch-pad-x.vercel.app"
    },
    {
      projectName: "Fang Stonks",
      projectDesc: "A stock price visualization tools built using Streamlit.",
      imgSrc: "/images/fang-stonks/fs-1.png",
      imgAlt: "fs-1",
      sourceCodeURL: "https://github.com/Aaryamann171/fang-stonks",
      deploymentURL: "https://share.streamlit.io/aaryamann171/fang-stonks/main/streamlit_app.py"
    },
    {
        projectName: "uniFy",
        projectDesc: "University utility app developed using Flutter.",
        imgSrc: "/images/uniFy/unify.png",
        imgAlt: "unify"
    },
    {
      projectName: "Synthwave - Vroom! Vroom!",
      projectDesc: "A driving game developed using PyGame.",
      imgSrc: "/images/svv/svv3.png",
      imgAlt: "svv1",
      sourceCodeURL: "https://github.com/Aaryamann171/Synthwave-Vroom-Vroom"
    }
  ]

  return (
    <div style={backgroudStyle}>
      <Navbar />
      <div className="container my-5">
        {
        projects.map((project) => {
          return (
            <div key={project.projectName} style={projectsStyle}>
            <Project
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
      <Footer />
    </div>
  );
};

export default Projects;
