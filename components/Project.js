const controllerStyle = {
  backgroundColor: "black",
};
const Project = (props) => {
  const dataTarget = `#${props.projectID}`;
  return (
    <div className="container my-auto">
      <div className="row my-4">
        <div className="col-4">
          <h1 className="display-2">{props.projectName}</h1>
          <p>{props.projectDesc}</p>
          <button className="btn btn-primary">Source Code</button>
          <button className="btn btn-light mx-4">Check it out</button>
        </div>
        <div className="col-8">
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
                  alt={props.imgAlt1}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.imgSrc2}
                  className="d-block w-100"
                  alt={props.imgAlt2}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={props.imgSrc3}
                  className="d-block w-100"
                  alt={props.imgAlt3}
                />
              </div>
            </div>
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
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Project;
