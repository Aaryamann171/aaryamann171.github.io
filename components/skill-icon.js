import Image from "next/image";

const SkillIcon = ({ thumbnailSrc, title }) => {
  return (
    <div className="bg-white rounded-full border-2 p-2 flex items-center">
      <Image
        alt={title}
        src={thumbnailSrc}
        title={title}
        height={35}
        width={35}
        loading="lazy"
      />
    </div>
  );
};

export default SkillIcon;
