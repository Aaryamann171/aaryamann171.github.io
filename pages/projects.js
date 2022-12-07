import Project from "../components/Project";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const backgroudStyle = {
  backgroundColor: "#F6F6F6",
  color: "#000000",
}

const foobar = {
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
      projectDesc: "An online code review tool developed using django.",
      imgSrc: "/images/dbug/dbug1.png",
      imgAlt: "dubg1",
      sourceCodeURL: "https://github.com/Aaryamann171/dbug-django",
      deploymentURL:  "http://d-bug.herokuapp.com/"
    },
    {
      projectName: "Fang Stonks",
      projectDesc: "A stock price visualization tools built using Streamlit a python Framework.",
      imgSrc: "/images/fang-stonks/fs-1.png",
      imgAlt: "fs-1",
      sourceCodeURL: "https://github.com/Aaryamann171/fang-stonks",
      deploymentURL: "https://share.streamlit.io/aaryamann171/fang-stonks/main/streamlit_app.py"
    },
    {
        projectName: "uniFy",
        projectDesc: "University utility app developed using Flutter a Dart Framework.",
        imgSrc: "/images/uniFy/unify.png",
        imgAlt: "unify"
      },
      {
        projectName: "Synthwave - Vroom! Vroom!",
        projectDesc: "A driving game developed using PyGame a Python library.",
        imgSrc: "/images/svv/svv1.png",
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
            <div key={project.projectName} style={foobar}>
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
