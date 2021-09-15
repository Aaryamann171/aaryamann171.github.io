import Link from "next/link";

const anchorStyle = {
  color: "black",
  textDecoration: "none",
};

const carouselImgStyle = {
  border: "2px black solid",
  borderRadius: "8px",
};

const Project = (props) => {
  let sourceCodeBtn, deploymentBtn;
  if (props.sourceCodeURL) {
    sourceCodeBtn = (
      <button className="btn btn-primary">
        <Link href={props.sourceCodeURL}>
          <a target="_blank" style={anchorStyle}>
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
          <a target="_blank" style={anchorStyle}>
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
          <div
            id={props.projectID}
            className="carousel slide"
            data-bs-touch="false"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={props.imgSrc1}
                  className="d-block w-100"
                  style={carouselImgStyle}
                  alt={props.imgAlt1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Project;
