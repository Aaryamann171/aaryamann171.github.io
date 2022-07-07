import Project from "../components/Project";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const backgroudStyle = {
  backgroundColor: "#0d1117",
  color: "#909DAB",
}

const Projects = () => {
  return (
    <div style={backgroudStyle}>
      <Navbar />
      <div className="container my-5">
        <Project
          projectName="dbug"
          projectDesc="An online code review tool developed using django."
          imgSrc="/images/dbug/dbug1.png"
          imgAlt="dubg1"
          sourceCodeURL="https://github.com/Aaryamann171/dbug-django"
          deploymentURL="http://d-bug.herokuapp.com/"
        />
        <Project
          projectName="Fang Stonks"
          projectDesc="A stock price visualization tools built using Streamlit a python Framework."
          imgSrc="/images/fang-stonks/fs-1.png"
          imgAlt="fs-1"
          sourceCodeURL="https://github.com/Aaryamann171/fang-stonks"
          deploymentURL="https://share.streamlit.io/aaryamann171/fang-stonks/main/streamlit_app.py"
        />
        <Project
          projectName="uniFy"
          projectDesc="University utility app developed using Flutter a Dart Framework."
          imgSrc="/images/uniFy/unify.png"
          imgAlt="unify"
        />
        <Project
          projectName="Synthwave - Vroom! Vroom!"
          projectDesc="A driving game developed using PyGame a Python library."
          imgSrc="/images/svv/svv1.png"
          imgAlt="svv1"
          sourceCodeURL="https://github.com/Aaryamann171/Synthwave-Vroom-Vroom"
        />
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
