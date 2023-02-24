import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

const Home = () => {
  return (
    <div className="md:h-screen md:w-screen flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <div className="mx-4 my-4 md:mx-20 p-4 md:p-10 bg-slate-100 border-2 border-black rounded-lg flex flex-col md:flex-row items-center justify-center">
        <div className="hidden md:block">
          <Image
            src="/images/others/aaryamann_vector.png"
            alt="aaryamann"
            height={1400}
            width={1400}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="/images/others/aaryamann_vector.png"
            alt="aaryamann"
            height={200}
            width={200}
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-7xl mt-4">
            Hello,<br /> I am <span className="font-bold">Aaryamann</span>
          </h1>
          <div className="w-full h-1 bg-slate-200 px-2 md:px-10 my-4"></div>
          <p className="text-lg md:text-xl">
            I am a Full Stack Developer with 2 years of experience, I have a passion for exploring diverse technologies and working alongside individuals who share a similar mindset.
            My academic background includes a B.Tech in Computer Science with a specialization in Artificial Intelligence.
            I am enthusiastic about collaborating on new projects and contributing my skills to create innovative solutions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;