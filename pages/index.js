import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

import { ImStack } from "react-icons/im";
import { MdOutlineSchool } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";

const Home = () => {
  return (
    <div className="md:h-screen md:w-screen flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <div className="mx-4 my-4 md:mx-20 p-4 md:p-10 bg-blue-100 rounded-3xl flex flex-col md:flex-row items-center justify-center">
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
          <h1 className="text-3xl md:text-7xl mt-4 text-slate-600">
            Hello,<br /> I am <span className="font-bold">Aaryamann</span>
          </h1>
          <div className="w-full h-1 bg-slate-300 px-2 md:px-10 my-4"></div>
          <div className="text-slate-800">
            <p className="text-sm md:text-xl flex mb-2">
              <div className="py-2">
                <ImStack />
              </div>
              <div className="ml-2">
                Full-stack developer with 2 years of experience building and deploying scalable and reliable web applications using a variety of programming languages and technologies.
              </div>
            </p>
            <p className="text-sm md:text-xl flex mb-2">
              <div className="py-2">
                <MdOutlineSchool />
              </div>
              <div className="ml-2">
                Expertise in both front-end and back-end development, with a focus on software design and architecture.
              </div>
            </p>
            <p className="text-sm md:text-xl flex mb-2">
              <div className="py-2">
                <GiTechnoHeart />
              </div>
              <div clasName="pl-4">
                <h1 className="ml-2">Passionate about exploring diverse technologies, collaborating on new projects and contributing skills to create innovative solutions.</h1>
              </div>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;