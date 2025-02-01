export const Child = (props) =>{

    const sendToparent = ()=>{
        props.runFunc("Harshal")
    }

    return(<>
        <h1>I am Child</h1>
        <button onClick={sendToparent} className="ui button">click to send to parent</button>
    </>)
}