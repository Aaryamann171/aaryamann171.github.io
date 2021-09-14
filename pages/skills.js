import Skill from "../components/Skill";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const skillsCardStyle = {
  border: "1px solid black",
  borderRadius: "8px",
  padding: "20px",
};
const Skills = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container my-auto">
          <div className="row">
            <div className="col">
              <Image
                src="/images/others/coder_vector.png"
                alt="coder"
                width="500"
                height="500"
              />
            </div>
            <div className="col" style={skillsCardStyle}>
              <h4>Programming</h4>
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/python.png"
                title="python"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
                title="c++"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/java-coffee-cup-logo.png"
                title="java"
              />
              <h4>Web Development</h4>
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/html-5.png"
                title="html5"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/css3.png"
                title="css3"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/javascript.png"
                title="javascript"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/bootstrap.png"
                title="bootstrap"
              />
              <h4>SQL</h4>
              <h4>Frameworks</h4>
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/django.png"
                title="django"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/angularjs.png"
                title="angularjs"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/flutter.png"
                title="flutter"
              />
              <h4>Platforms and Tools</h4>
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/linux.png"
                title="linux"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/git.png"
                title="git"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/github.png"
                title="github"
              />
              <Skill
                thumbnailSrc="https://img.icons8.com/color/144/000000/adobe-xd.png"
                title="adobe-xd"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Skills;
