import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Skill from "../components/Skill";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:block hidden">
          <Image
            src="/images/others/coder_vector.png"
            alt="coder"
            height={500}
            width={500}
          />
        </div>
        <div className="md:hidden">
          <Image
            src="/images/others/coder_vector.png"
            alt="coder"
            height={200}
            width={200}
          />
        </div>
        <div className="mb-6 px-4 md:px-10 py-2 bg-slate-100 border-2 border-black rounded-lg flex items-center justify-center overflow-x-hidden">
          <div>
            {
              skillsData.map((data, index) => {
                return (
                  <div key={index}>
                    <h1 className="text-2xl mb-2 text-center px-4 md:px-36">{data.category}</h1>
                    <div className="flex justify-center space-x-4">
                      {
                        data.skills.map((skill, index) => {
                          return (
                            <div className="mb-2" key={index}>
                              <Skill title={skill.title} thumbnailSrc={skill.thumbnailSrc} />
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
