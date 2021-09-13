import Project from "../components/Project";

const Projects = () => {
    return(
        <div>
            <h1>Have a look at my projects</h1>
            <Project projectName="test1" projectDesc="does stuff" />
            <Project projectName="test2" projectDesc="does stuff also" />
        </div>
    ) 
}
export default Projects;