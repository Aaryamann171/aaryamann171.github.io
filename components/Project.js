const Project = (props) => {
    return(
        <div>
            <h1 className="display-1">
                {props.projectName} 
            </h1>
            <p>
                {props.projectDesc} 
            </p>
        </div>
    )
}
export default Project;