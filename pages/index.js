import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const imgStyle = {
  borderRadius: "8px",
  alignItems: "center",
  maxWidth: "100%",
};

const descBoxStyle = {
  padding: "20px",
  border: "1px black solid",
  borderRadius: "8px",
};

export default function Home() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="my-auto container">
          <div style={descBoxStyle}>
            <div>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img
                    src="/images/others/aaryamann_vector.png"
                    alt="aaryamann"
                    style={imgStyle}
                  />
                </div>
                <div className="col-md-8 col-sm-12">
                  <h1 className="display-2">
                    Hello,
                    <br /> I am Aaryamann
                    <hr />
                  </h1>
                  <p className="lead">
                    B.Tech in <strong>Computer Science</strong> with
                    specialization in <strong>A</strong>rtificial{" "}
                    <strong>I</strong>ntelligence. <br />
                    Currently working as a <strong>Full Stack Developer</strong>
                    . <br />I like to play around with various technologies and
                    collaborate with like minded people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
