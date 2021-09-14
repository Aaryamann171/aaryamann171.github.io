import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className={styles.descBox}>
        <div className="container">
        <div className="row">
          <div className="col">
            <Image src="/images/others/aaryamann_vector.png" alt="aaryamann" width="250" height="250" />
          </div>
          <div className="col">
        <h1 className="display-1">Hello,<br/> I am Aaryamann</h1>
        <p>
          I am a B.Tech Computer Science grad with specialization in Artificial Intelligence. Currently working as a Full Stack Developer.
          I like to play around with various technologies and collabrate with like minded people.
        </p>
          </div>
        </div>
      </div>
        </div>
        </div>
    </div>
  )
}