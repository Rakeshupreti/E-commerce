import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
function Product() {


  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");


  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log(res.data.data, "data from backedn");
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  

  

  const addToCart = () => {
    console.log(userId, id);
    axios
      .post(`http://localhost:5000/users/cart/${userId}`, {
        productId: id,
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="Product">
      <div>
        <div>
          {/* {data.map((item)=> (
                        <div onClick={() => navigate(`/product/${item._id}`)}>
    
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiv4B-1T3IG7iG3F_GSrOxDPBeERGU4EMTQ&usqp=CAU" 
                            alt="err" />
                        </div>
                    ))} */}
        </div>
        <div className="productmain">
          <div className="">
            <div className="d-flex flex-column m-5">
              <div className="d-flex justify-content-center">{data.name}</div>
              <div>
                <img className="productimage" src={data.imageUrl} alt="" />
              </div>
            </div>
          </div>
          <div className="productbutton">
            <button onClick={() => addToCart()}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
