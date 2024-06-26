import { useEffect, useState } from "react";

function UseEffectComponent()
{
    const [ count, setCount ] = useState(0);
    const [ title, setTitle ] = useState("");
    //Trường hợp 1: Không có cleanup
    //Callback được gọi khi component được mounted
    //Callback được gọi khi state thay đổi
    //=>Ít dùng
    useEffect(() =>
    {
        console.log("Mounted");
        document.title = title;
    });
    //Trường hợp 2: Có cleanup là 1 mảng rỗng
    //Callback được gọi 1 lân khi component được mounted
    //Thường dùng để gọi API render dữ liệu lần đầu
    useEffect(() =>
    {
        console.log("API");
    }, []);

    //Trường hợp 3: Có cleanup là một dependency
    //Callback được gọi khi dependency bị thay đổi
    useEffect(() =>
    {
        console.log("Dependency");
    }, [ count ]);
    return (
        <>
        </>
    );
}

export default UseEffectComponent;