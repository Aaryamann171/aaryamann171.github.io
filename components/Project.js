import Link from "next/link";
const controllerStyle = {
  backgroundColor: "black",
};
const url = "https://github.com/Aaryamann171/dbug-django";
const Project = (props) => {
  const dataTarget = `#${props.projectID}`;
  let image2, image3, nextBtn, prevBtn, sourceCodeBtn, deploymentBtn;
  if (props.imgSrc2) {
    image2 = (
      <div className="carousel-item">
        <img
          src={props.imgSrc2}
          className="d-block w-100 carouselImg"
          alt={props.imgAlt2}
        />
      </div>
    );
    image3 = (
      <div className="carousel-item">
        <img
          src={props.imgSrc3}
          className="d-block w-100 carouselImg"
          alt={props.imgAlt3}
        />
      </div>
    );
    nextBtn = (
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={dataTarget}
        data-bs-slide="next"
      >
        <span
          style={controllerStyle}
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    );
    prevBtn = (
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span
          style={controllerStyle}
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
    );
  }
  if (props.sourceCodeURL) {
    sourceCodeBtn = (
      <button className="btn btn-primary">
        <Link href={props.sourceCodeURL}>
          <a target="_blank">Source Code</a>
        </Link>
      </button>
    );
  }
  if (props.deploymentURL) {
    deploymentBtn = (
      <button className="btn btn-light mx-4">
        <Link href={props.deploymentURL}>
          <a target="_blank">Check it out</a>
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
                  className="d-block w-100 carouselImg"
                  alt={props.imgAlt1}
                />
              </div>
              {image2}
              {image3}
            </div>
            {prevBtn}
            {nextBtn}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Project;
