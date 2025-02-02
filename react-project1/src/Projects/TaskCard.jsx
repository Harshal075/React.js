import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TaskCard=(props)=>{
    const task = props.data;

    const handleClick=()=>{
        props.runFunc(task);
    }

    return(<>
        <div className="ui card">
            <h4>{task}</h4>
            <FaCheck/>
            <button onClick={handleClick}><MdDelete/></button>
        </div>
    </>)
}