import { useState } from "react"
import { TaskCard } from "./TaskCard";

export const Todo = () =>{
    const[inputValue , setValue] = useState("");
    const[tasks , setTasks] = useState([]);
    const[DateTime , setDateTime] = useState("");

    const handleClearButton =()=>{
        setTasks([]);
    }

    const deleteTask=(data)=>{
        const updateStudents = tasks.filter((curr)=>{
            if(curr !== data) return curr;
            else return;
        })
        setTasks(updateStudents);
    }

    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`);

    }, 1000);
    
    const handleInput = (event) =>{
        setValue(event.target.value)
    }

    const handleForm = (event) =>{
        event.preventDefault();
    }   

    const handleButton =()=>{
        if(!inputValue) return;

        if(tasks.includes(inputValue))
        {
            setValue("");
            return;
        }

        setTasks((prev)=>[...prev , inputValue]);
        setValue("");
    }

    return(<>
        <h1>Todo List</h1>
        <h2>{DateTime}</h2>
        <form onSubmit={handleForm} className="ui form">
            <input
                type="text" 
                placeholder="Enter a Task" 
                value={inputValue}
                onChange={handleInput}
            />
            <button onClick={handleButton} className="ui button">Add Task</button>
        </form>
        <ul>
            {
                tasks.map((curr,index)=>{
                    return(<TaskCard runFunc={deleteTask} data={curr} key={index}/>)
                })
            }
        </ul>
        <button  onClick={handleClearButton} className="bg-red-400">Clear All</button>
    </>)
}