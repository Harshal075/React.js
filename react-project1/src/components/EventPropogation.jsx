export const EventPropogation = ()=>{

    const handleChild = (event) =>{
        console.log('Child Div');
        // event.stopPropagation();
    }

    const handleParent = () =>{
        console.log('Parent Div');
    }

    const handlegrandparent = (event) =>{
        console.log('GrandParent Div');
    }


    return(<>
        <div className="ui red segment" onClickCapture={handlegrandparent}>
            <div className="ui green segment" onClickCapture={handleParent}>
                <button className="ui button" onClickCapture={handleChild}>click me</button>
            </div>
        </div>
    
    </>)
}