import { useState } from "react";

function ConditionalRender()
{
    const [ show, setShow ] = useState(false);
    return (
        <div>
            { show ? (<h1>Show</h1>) : (<><h1>Hidden</h1></>) }
            <button onClick={ () => setShow(prev => !prev) }>Show</button>
        </div>
    );
}

export default ConditionalRender;