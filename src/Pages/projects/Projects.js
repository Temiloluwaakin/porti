import { Link } from "react-router-dom";
import './projectsstyle.css'
import calc from './calc.PNG'
import todo from './todo.PNG'

const Projects = () => {
    return (
        <div className="projects">
            <Link to='/projects/calculator'>
                <img src={calc} alt='calculator' width={100}/>
                CALCUTATOR APP
            </Link>
            <Link to='/projects/todoapp'>
                <img src={todo} alt='todo app' width={100}/>
                TODO APP
            </Link>
        </div>
    );
}
 
export default Projects;