import Image from "next/image";

const SkillIcon = ({ thumbnailSrc, title }) => {
  return (
    <div className="flex items-center">
      <Image
        alt={title}
        src={thumbnailSrc}
        title={title}
        height={50}
        width={50}
        loading="lazy"
      />
    </div>
  );
};

export default SkillIcon;
