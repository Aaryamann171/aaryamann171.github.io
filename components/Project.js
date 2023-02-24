import Link from "next/link";
import Image from "next/image";

const Project = (props) => {
  let sourceCodeBtn, deploymentBtn;

  if (props.sourceCodeURL) {
    sourceCodeBtn = (
      <button className="bg-[#5D6EC7] py-2 px-2 md:px-8 border-2 border-black rounded-lg">
        <Link href={props.sourceCodeURL}>
          <a target="_blank" className="text-white">
            Source Code
          </a>
        </Link>
      </button>
    );
  }

  if (props.deploymentURL) {
    deploymentBtn = (
      <button className="py-2 px-2 md:px-8 border-2 border-black rounded-lg">
        <Link href={props.deploymentURL}>
          <a target="_blank" className="text-black">
            Check it out
          </a>
        </Link>
      </button>
    );
  }

  return (
    <div className="my-4 md:my-6 mx-4 md:mx-20 rounded-lg border-2 md:p-10 border-black overflow-x-hidden">
      <div className="flex flex-col md:flex-row my-4 p-4">
        <div className="md:w-1/3 my-2">
          <h1 className="md:text-7xl text-3xl mb-10">{props.projectName}</h1>
          <p className="text-xl font-light mt-4 mb-10">{props.projectDesc}</p>
          <div className="flex space-x-4">
            {sourceCodeBtn}
            {deploymentBtn}
          </div>
        </div>
        <span className="md:w-2/3 rounded-lg border-2 border-black mx-auto md:block hidden">
          <Image
            src={props.imgSrc}
            width={800}
            height={450}
            alt={props.imgAlt}
            loading="lazy"
          />
        </span>
        <span className="md:w-2/3 rounded-lg border-2 border-black mx-auto mt-4 md:hidden">
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

export default Project;
