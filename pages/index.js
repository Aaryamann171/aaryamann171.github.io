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
                  <p>
                    I am a B.Tech Computer Science grad with specialization in
                    Artificial Intelligence. Currently working as a Full Stack
                    Developer. I like to play around with various technologies
                    and collabrate with like minded people.
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
