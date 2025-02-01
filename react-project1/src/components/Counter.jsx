import { useState } from "react";

export const Counter = () =>{
    const[count , setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count+1)
        console.log(count);
    }

    return(<>
        <div className="ui red center aligned segment">
            <h1>{count}</h1>
            <button className="ui button" onClick={handleIncrement}>Increment</button>
        </div>
    </>)
}