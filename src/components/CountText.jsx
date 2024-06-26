import { useState } from "react";

function CountText()
{
    const [ textCount, setTextCount ] = useState(0);
    const [ checkBox, setCheckBox ] = useState([]);
    const handleAddCheckBox = (item) =>
    {
        let tempArr = [ ...checkBox ];
        if (!tempArr.includes(item))
        {
            tempArr.push(item);
        }
        else
        {
            tempArr.splice(tempArr.indexOf(item), 1);
        }
        setCheckBox(tempArr);
    };
    return (
        <>
            <textarea onChange={ (e) => setTextCount(e.target.value.length) }></textarea>
            <h1>Số ký tự: { textCount }</h1>
            <h1>Checkbox</h1>
            <h3>{ checkBox.toString() }</h3>
            <h3>{ JSON.stringify(checkBox) }</h3>
            <h2>Sở thích: [{
                checkBox.map(
                    (item) =>
                    {
                        return (<>
                            <span>"{ item }",</span>
                        </>);
                    }
                )
            } ]
            </h2>
            <input onClick={ () => handleAddCheckBox("Đi chơi") } type={ "checkbox" }></input> <label>Đi chơi</label>
            <input onClick={ () => handleAddCheckBox("Code") } type={ "checkbox" }></input><label>Code</label>
            <input onClick={ () => handleAddCheckBox("Nhảy dây") } type={ "checkbox" }></input>  <label>Nhảy dây</label>
            <input onClick={ () => handleAddCheckBox("Bơi lội") } type={ "checkbox" } ></input><label>Bơi lội</label>
        </>
    );
}

export default CountText;