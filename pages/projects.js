import Project from "../components/Project";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <Project
          projectName="dbug"
          projectID="dbug"
          projectDesc="An online code review tool developed using django."
          imgSrc1="/images/dbug/dbug1.png"
          imgAlt1="dubg1"
          imgSrc2="/images/dbug/dbug2.png"
          imgAlt2="dubg2"
          imgSrc3="/images/dbug/dbug3.png"
          imgAlt3="dubg3"
          sourceCodeURL="https://github.com/Aaryamann171/dbug-django"
          deploymentURL="http://d-bug.herokuapp.com/"
        />
        <Project
          projectName="Fang Stonks"
          projectID="fangStonks"
          projectDesc="A stock price visualization tools built using Streamlit a python Framework."
          imgSrc1="/images/fang-stonks/fs-1.png"
          imgAlt1="fs-1"
          sourceCodeURL="https://github.com/Aaryamann171/fang-stonks"
          deploymentURL="https://share.streamlit.io/aaryamann171/fang-stonks/main/streamlit_app.py"
        />
        <Project
          projectName="uniFy"
          projectID="uniFy"
          projectDesc="University utility app developed using Flutter a Dart Framework."
          imgSrc1="/images/uniFy/unify.png"
          imgAlt1="unify"
        />
        <Project
          projectName="Synthwave - Vroom! Vroom!"
          projectID="svv"
          projectDesc="A driving game developed using PyGame a Python library."
          imgSrc1="/images/svv/svv1.png"
          imgAlt1="svv1"
          imgSrc2="/images/svv/svv2.png"
          imgAlt2="svv2"
          imgSrc3="/images/svv/svv3.png"
          imgAlt3="svv3"
          sourceCodeURL="https://github.com/Aaryamann171/Synthwave-Vroom-Vroom"
        />
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
