import Link from "next/link";
import Image from "next/image";

import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";


const ProjectCard = (props) => {
  let sourceCodeBtn, deploymentBtn;

  if (props.sourceCodeURL) {
    sourceCodeBtn = (
      <button className="bg-blue-500 hover:bg-blue-600 py-2 px-2 md:px-8 border-2 border-blue-500 hover:border-blue-600 rounded">
        <Link href={props.sourceCodeURL}>
          <a target="_blank" className="text-white flex items-center space-x-2">
            <div>Source Code</div>
            <BsGithub />
          </a>
        </Link>
      </button>
    );
  }

  if (props.deploymentURL) {
    deploymentBtn = (
      <button className="py-2 px-2 md:px-8 bg-white hover:bg-slate-100 rounded">
        <Link href={props.deploymentURL}>
          <a target="_blank" className="text-black flex items-center space-x-2">
            <div>Check it out</div>
            <FiExternalLink />
          </a>
        </Link>
      </button>
    );
  }

  return (
    <div className="my-4 md:my-6 mx-4 md:mx-20 bg-blue-100 rounded-3xl md:p-10 overflow-x-hidden">
      <div className="flex flex-col md:flex-row my-4 p-4">
        <div className="md:w-1/3 my-2">
          <h1 className="md:text-6xl text-3xl mb-10 font-bold text-slate-600">{props.projectName}</h1>
          <p className="text-xl font-light mt-4 mb-10 text-slate-800">{props.projectDesc}</p>
          <div className="flex space-x-4">
            {sourceCodeBtn}
            {deploymentBtn}
          </div>
        </div>
        <span className="md:w-2/3 ml-4 bg-white rounded-2xl mx-auto md:flex items-center p-4 hidden">
          <Image
            src={props.imgSrc}
            width={800}
            height={450}
            alt={props.imgAlt}
            loading="lazy"
          />
        </span>
        <span className="md:w-2/3 rounded-3xl mx-auto mt-4 md:hidden">
          <Image
            src={props.imgSrc}
            width={400}
            height={225}
            alt={props.imgAlt}
            loading="lazy"
          />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
