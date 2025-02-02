import { useState } from "react"

export const Toggle = () =>{
    const[state , setState] = useState(1);
    let val = state?"on":"off"

    const handleClick = ()=>{
        let curr = state?0:1;
        setState(curr);
    }

    return(<>
        <style>
            {`
                .parent{
                display:flex;
                justify-content:center;
                align-items:center;
                }

                .butt{
                background-color:${state?"green":"grey"};
                width:150px;
                height:60px;
                border-radius:50px;
                display:flex;
                align-items:center
                }

                .child{
                background-color:${state?"green":"red"};
                border-radius:50px;
                border:3px solid white;
                min-width:50px;
                min-height:50px;
                display:flex;
                justify-content:center;
                align-items:center;
                margin:${state?"90px":"7px"};
                }
            `}
        </style>


        <div className="parent">
        <div className="butt">
            <div onClick={handleClick} className="child" >
                <span className="text-center">{val}</span>
            </div>
        </div>
    </div>
    
    
    </>)
}   