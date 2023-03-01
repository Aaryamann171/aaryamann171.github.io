import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SkillIcon from "../components/skill-icon";
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
        <div className="p-4 md:px-10 md:py-4 bg-slate-100 border-2 border-black rounded-lg overflow-x-hidden">
          <div>
            {
              skillsData.map((data, index) => {
                return (
                  <div key={index} className="bg-white border-2 rounded-lg my-4 p-4 border-black flex">
                    <h1 className="w-1/2 text-2xl text-center my-auto">{data.category}</h1>
                    <div className="flex w-1/2 justify-center space-x-2">
                      {
                        data.skills.map((skill, index) => {
                          return (
                            <div className="mb-2" key={index}>
                              <SkillIcon title={skill.title} thumbnailSrc={skill.thumbnailSrc} />
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
