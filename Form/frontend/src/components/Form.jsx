import { useState } from "react"
import axios from "axios";
/* eslint-disable react/no-unknown-property */
export const Form = () =>{

    const[formData , setForm] = useState({name:"" , email:"" ,age:null ,message:""});
    const {name , email , age , message} = formData;

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    const handleButton = async() =>{
        try
        {
            await axios.post('http://localhost:4500/save',formData);
            alert("Data Submitted Successfully");
        }
        catch(error)
        {
            console.log(error);
        }

        setForm({name:"",email:"",age:"",message:""});
    }

    const handleChange = (event) =>{
        setForm(()=>{
            let data = {...formData , [event.target.name] : event.target.value};
            return data;
        })
    }


    return(<div className="ui container">
        <h1 className="ui header center aligned">Form Data</h1>
        <form onSubmit={handleSubmit} className="ui red raised padded segment field">
            <label for='name'>Name   </label>
            <input onChange={handleChange} className="ui input" value={name} name='name' type="text" required />

            <label for='email'>Email   </label>
            <input onChange={handleChange} type='email' value={email} name='email' required ></input>

            <label for='age'>Age   </label>
            <input onChange={handleChange} name='age' type='number' value={age} required/>

            <label for='message'>Message   </label>
            <input onChange={handleChange} type='text' value={message} name="message"/>

            <button onClick={handleButton} className="ui button">Submit</button>
        </form>
    
    </div>)
}