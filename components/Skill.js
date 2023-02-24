import Image from "next/image";

const Skill = ({ thumbnailSrc, title }) => {
  return (
    <Image
    alt={title}
      src={thumbnailSrc}
      title={title}
      height={50}
      width={50}
      loading="lazy"
    />
  );
};

export default Skill;
