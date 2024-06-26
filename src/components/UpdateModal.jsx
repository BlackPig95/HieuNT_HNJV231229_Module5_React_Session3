function UpdateModal({ item, handleModalUpdate, handleUpdateItem })
{
    // console.log(item);
    return (
        <div className="update-modal">
            <h1>Cập nhật công việc</h1>
            <h3>Tên công việc</h3>
            <input id="item-data" type="text" defaultValue={ item.data }></input>
            <button onClick={ () => handleModalUpdate(false) }>Hủy</button>
            <button onClick={ () =>
            {
                handleUpdateItem(item.id, document.getElementById("item-data").value);
                handleModalUpdate(false);
            } }>Đồng ý</button>
        </div>
    );
}

export default UpdateModal;