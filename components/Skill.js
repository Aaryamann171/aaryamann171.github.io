const imgStyles = {
  width: "10%",
  padding: "5px",
};
const Skill = (props) => {
  return <img style={imgStyles} src={props.thumbnailSrc} title={props.title} />;
};

export default Skill;
