import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Categorylist(){
    const [data , setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get("http://localhost:5000/category")
        .then((res) => setData(res.data.data ))
        .catch((err) => console.log(err));
    },[]);

    return(
        <div className="Categorylist">
            <div>
                <h1>Furnicture Category</h1>
            </div>

            <div>
                {data.map((item) => (
                    <div>
                        <p>{item.name}</p>
                        <img src={item.imageUrl} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Categorylist;