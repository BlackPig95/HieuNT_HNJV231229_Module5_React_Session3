import { useState } from "react";
import UpdateModal from "./UpdateModal";

function ToDoItem({ item, handleUpdateItem })
{
    const [ modalState, setmodalState ] = useState(false);
    const handleModalUpdate = (state) =>
    {
        setmodalState(state);
    };
    return (
        <div className="item">
            <div>
                <input type="checkbox"></input>
                <label>{ item.data }</label>
            </div>
            <div>
                <i onClick={ () => handleModalUpdate(true) } className="fa-solid fa-pencil"></i>
                <i className="fa-solid fa-trash"></i>
            </div>
            { modalState ? <UpdateModal key={ item.id } item={ item } handleModalUpdate={ handleModalUpdate } handleUpdateItem={ handleUpdateItem } /> : "" }
        </div>

    );
}

export default ToDoItem;