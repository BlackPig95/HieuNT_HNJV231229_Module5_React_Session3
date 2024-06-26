import { useState } from "react";

function UseStateComponent()
{
    const [ count, setCount ] = useState(0);
    return (
        <div>
            { count }
            <button onClick={ () =>
            {
                console.log("Clicked");
                // setCount(count + 3);
                // setCount(count + 4);
                // setCount(count + 2);
                // setCount(count + 1);
                setCount((prev) => prev + 1);
                setCount((prev) => prev + 2);
                setCount((prev) => prev + 3);
            }
            }>Click</button>
        </div>
    );
}

export default UseStateComponent;