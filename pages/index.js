import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

const imgStyle = {
  borderRadius: "8px",
  alignItems: "center",
  maxWidth: "100%",
};

const descBoxStyle = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "20px",
  borderLeft: "2px black solid",
  borderTop: "2px black solid",
  borderBottom: "4px black solid",
  borderRight: "4px black solid",
  borderRadius: "8px",
};

export default function Home() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100" style={{backgroundColor: "#F6F6F6"}}>
        <Navbar />
        <div className="my-auto container">
          <div id="brutal-btn" style={descBoxStyle}>
            <div>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <Image
                    src="/images/others/aaryamann_vector.png"
                    alt="aaryamann"
                    style={imgStyle}
                    height={400}
                    width={400}
                  />
                </div>
                <div className="col-md-8 col-sm-12">
                  <h1 className="display-2">
                    Hello,
                    <br /> I am <strong>Aaryamann</strong>
                    <hr />
                  </h1>
                  <p className="lead">
                   I am a Full Stack Developer with 2 years of experience, I have a passion for exploring diverse technologies and working alongside individuals who share a similar mindset. 
                   My academic background includes a B.Tech in Computer Science with a specialization in Artificial Intelligence. 
                   I am enthusiastic about collaborating on new projects and contributing my skills to create innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div >
        <Footer />
      </div>
    </div>
  );
}
