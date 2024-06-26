import { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./todolist.css";

function ToDolist()
{
    const [ toDoItems, setToDoItems ] = useState([]);
    const handleAddItem = (e) =>
    {
        e.preventDefault();
        const formData = e.target.elements[ 0 ].value;
        let newId = toDoItems.length === 0 ? 0 : (toDoItems[ toDoItems.length - 1 ].id + 1);
        let newItem = {
            id: newId,
            data: formData
        };
        setToDoItems((prev) => [ ...prev, newItem ]);
    };
    const handleUpdateItem = (id, newData) =>
    {
        let tempItemsArray = [ ...toDoItems ];
        tempItemsArray.forEach(item =>
        {
            if (item.id === id)
            {
                item.data = newData;
            }
        });
        setToDoItems(tempItemsArray);
    };
    return (
        <>
            <h1>Danh sách công việc</h1>
            <form onSubmit={ handleAddItem }>
                <input type="text"></input>
                <button>Thêm</button>
            </form>
            <div className="item-list">
                {
                    toDoItems.map((item) =>
                    {
                        return (<ToDoItem key={ item.id } item={ item } handleUpdateItem={ handleUpdateItem } />);
                    })
                }
            </div>
        </>
    );
}

export default ToDolist;