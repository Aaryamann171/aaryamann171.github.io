import Skill from "../components/Skill";

const Skills = () => {
    return(
        <div>
        <h1>Have a look at my skills</h1>
        <ul>
            <Skill skillName="algorithms" />
            <Skill skillName="git" />
            <Skill skillName="frontend" />
            <Skill skillName="backend" />
        </ul>
        </div>
    )
}

export default Skills;