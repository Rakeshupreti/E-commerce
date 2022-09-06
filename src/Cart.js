import React,{useEffect, useState , dispatch} from "react";
import axios from "axios";

function Cart(){
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false);

    const userid = localStorage.getItem("userId");
    useEffect (() => {
        axios
        .get(`http://localhost:5000/users/cart/${userid}`)
        .then((res) => {
            console.log(res.data.data.items);
            setData(res.data.data.items);
        })
        // .then((res) => console.log(res.data.data.items))
        .catch((err) => console.log(err))
    }, [update]);

    const increment = (productId) => {
        axios
        .post(`http://localhost:5000/users/cart/${userid}` , {
            productId: productId
        })
        .then((res) => {
            console.log(res.data);
            setUpdate(!update)
        })
        .catch((e) => console.log(e));
    };

    const remove = (productId) => {
        axios
        .delete(`http://localhost:5000/users/cart/${userid}` , {
            productId: productId
        })
        .then((res) => {
            console.log(res.data);
            setUpdate(!update);
        })
        .catch((e) => console.log(e));
    };
    return(
        <div className="Cart">
            <div>
                {data.map((items)=>(
                    <div>
                        <p>{items._id}</p>
                        <p>{items.name}</p>
                        <p>{items.price}</p>
                        <button onClick={() => increment(items.productID)}>Increase</button>
                        <button onClick={() => remove(items.productID)}>Remove</button>
                    </div>
                ))}
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default Cart;