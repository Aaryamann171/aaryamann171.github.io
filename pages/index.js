import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

import {ImStack} from "react-icons/im";
import {MdOutlineSchool} from "react-icons/md";
import {GiTechnoHeart} from "react-icons/gi";

const Home = () => {
  return (
    <div className="md:h-screen md:w-screen flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <div className="mx-4 my-4 md:mx-20 p-4 md:p-10 bg-slate-100 border-2 border-black rounded-lg flex flex-col md:flex-row items-center justify-center">
        <div className="hidden md:block">
          <Image
            src="/images/others/aaryamann_vector.png"
            alt="aaryamann"
            height={600}
            width={600}
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
          <p className="text-lg md:text-xl flex mb-2">
            <ImStack/>
            <span className="ml-4">
              Full Stack Developer with 2 years of experience
            </span>
          </p>
          <p className="text-lg md:text-xl flex mb-2">
            <MdOutlineSchool/>
            <span className="ml-4">
              Holds a B.Tech in Computer Science with a specialization in Artificial Intelligence
            </span>
          </p>
          <p className="text-lg md:text-xl flex mb-2">
            <GiTechnoHeart size={25}/>
            <span className="ml-4">
              Passionate about exploring diverse technologies, collaborating on new projects and contributing skills to create innovative solutions.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;