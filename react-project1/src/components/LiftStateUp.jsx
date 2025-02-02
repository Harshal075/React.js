import { useState } from "react"

export const LiftState = () =>{
    const[name , setname] = useState("");

    const changeName = (data) =>{
        setname(data);
    }

    return(<>
        <InputComponent name={name} runFunc = {changeName}></InputComponent>
        <DisplayComponent name={name}></DisplayComponent>
    </>)
}

const InputComponent = (props) =>{

    const handleChange =(event)=>{
        let name = event.target.value;
        props.runFunc(name);
    }

    return(<>
        <input 
            className="ui input"
            type="text" 
            placeholder="enter ur name"
            value={props.name}
            onChange={handleChange}  />
    </>)
}

const DisplayComponent = (props) =>{
    return(<>
        <h1>Hey Welcome {props.name}</h1>
    </>)
}