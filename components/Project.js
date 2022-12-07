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
  borderLeft: "2px black solid",
  borderTop: "2px black solid",
  borderBottom: "4px black solid",
  borderRight: "4px black solid",
  borderRadius: "8px",
};

const deploymentBtnStyle = {
  borderLeft: "2px black solid",
  borderTop: "2px black solid",
  borderBottom: "4px black solid",
  borderRight: "4px black solid",
  borderRadius: "8px",
}

const sourceCodeBtnStyle = {
  backgroundColor: "#5D6EC7",
  borderLeft: "2px black solid",
  borderTop: "2px black solid",
  borderBottom: "4px black solid",
  borderRight: "4px black solid",
  borderRadius: "8px",
}

const Project = (props) => {
  let sourceCodeBtn, deploymentBtn;
  if (props.sourceCodeURL) {
    sourceCodeBtn = (
      <button className="btn btn-primary" style={sourceCodeBtnStyle}>
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
      <button className="btn btn-light mx-2 mb-mx-0" style={deploymentBtnStyle} >
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
          <h1 className="display-2 font-weight-bold">{props.projectName}</h1>
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
    </div>
  );
};
export default Project;
