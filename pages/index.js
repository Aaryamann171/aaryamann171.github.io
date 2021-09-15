import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="my-auto container">
          <div className={styles.descBox}>
            <div>
              <div className="row">
                <div className="col">
                  <Image
                    src="/images/others/aaryamann_vector.png"
                    alt="aaryamann"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="col">
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
