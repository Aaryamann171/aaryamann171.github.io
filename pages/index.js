import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

import { ImStack } from "react-icons/im";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiTechnoHeart } from "react-icons/gi";

const Home = () => {
    return (
        <div className="md:h-screen md:w-screen flex flex-col justify-between items-center overflow-x-hidden">
            <Navbar />
            <div className="mx-4 my-4 md:mx-20 p-4 md:p-10 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-3xl flex flex-col md:flex-row items-center justify-center">
                <div className="hidden md:block">
                    <Image
                        src="/images/others/avatar_updated.png"
                        alt="aaryamann"
                        height={1000}
                        width={1000}
                        quality={80}
                        priority={true}
                    />
                </div>
                <div className="md:hidden">
                    <Image
                        src="/images/others/avatar_updated.png"
                        alt="aaryamann"
                        height={200}
                        width={200}
                        quality={80}
                        priority={true}
                    />
                </div>
                <div>
                    <h1 className="text-3xl md:text-7xl mt-4 text-slate-300">
                        Hello,
                        <br /> I am{" "}
                        <span className="font-lold text-[#5DE4C7]">
                            Aaryamann
                        </span>
                    </h1>
                    <div className="w-full h-1 bg-[#E4F0FB] px-2 md:px-10 my-4"></div>
                    <div className="text-slate-300 text-[#89DDFF]">
                        <p className="text-sm md:text-xl flex mb-2 ">
                            <div className="py-2 text-[#5DE4C7]">
                                <ImStack />
                            </div>
                            <div className="ml-2">
                                Full-stack developer with 4+ years of experience
                                designing, building, and deploying scalable web
                                applications using modern frameworks and cloud
                                infrastructure.
                            </div>
                        </p>
                        <p className="text-sm md:text-xl flex mb-2">
                            <div className="py-2 text-[#5DE4C7]">
                                <AiOutlineThunderbolt />
                            </div>
                            <div className="ml-2">
                                Proficient in both front-end and back-end
                                development, with a strong focus on clean
                                architecture and system design.
                            </div>
                        </p>
                        <p className="text-sm md:text-xl flex mb-2">
                            <div className="py-2 text-[#5DE4C7]">
                                <GiTechnoHeart />
                            </div>
                            <div className="pl-2">
                                <h1>
                                    Continuously exploring new technologies,
                                    contributing to cross-functional teams, and
                                    delivering solutions that balance
                                    performance, maintainability, and user
                                    experience.
                                </h1>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
