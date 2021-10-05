import Link from "next/link";

const anchorStyleSourceCode = {
  color: "white",
  textDecoration: "none",
};

const anchorStyleDeployment = {
  color: "black",
  textDecoration: "none",
};

const projectImgStyle = {
  border: "2px black solid",
  borderRadius: "8px",
};

const Project = (props) => {
  let sourceCodeBtn, deploymentBtn;
  if (props.sourceCodeURL) {
    sourceCodeBtn = (
      <button className="btn btn-primary">
        <Link href={props.sourceCodeURL}>
          <a target="_blank" style={anchorStyleSourceCode}>
            Source Code
          </a>
        </Link>
      </button>
    );
  }
  if (props.deploymentURL) {
    deploymentBtn = (
      <button className="btn btn-light mx-4 deploymentBtn">
        <Link href={props.deploymentURL}>
          <a target="_blank" style={anchorStyleDeployment}>
            Check it out
          </a>
        </Link>
      </button>
    );
  }
  return (
    <div className="container my-auto">
      <div className="row my-4">
        <div className="col-md-4 col-sm-12 my-3">
          <h1 className="display-2">{props.projectName}</h1>
          <p className="lead">{props.projectDesc}</p>
          {sourceCodeBtn}
          {deploymentBtn}
        </div>
        <div className="col-md-8 col-sm-12">
          <img
            src={props.imgSrc}
            className="d-block w-100"
            style={projectImgStyle}
            alt={props.imgAlt}
            loading="lazy"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Project;
