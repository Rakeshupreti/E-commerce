import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Shop() {
  //useEffect
  // -> trigger on mount
  // -> trigger on all updates
  // -> trigger on specific updates
  // -> trigger on unmount

  // create state here

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Shop">
      <div className="shopfull">
        <div className="shopheading">
          <h1>Search Your Dream Furnicture.</h1>
        </div>

        {/* <div className="shopsearch">
          <input type="text" placeholder="Search.." />
        </div> */}
        <div className="shopsearch1">
          <div className="shopsearch">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  🔍
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="shopphoto1">
            {data.map((item) => (
              <div className="border border-danger" onClick={() => navigate(`/product/${item._id}`)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiv4B-1T3IG7iG3F_GSrOxDPBeERGU4EMTQ&usqp=CAU"
                  alt="error"
                />
                <h1 className="text-center">{item.name}</h1>
                <h2 className="text-center">{item.price}</h2>
              </div>
            ))}
          </div>
          <div className="shopphoto2">
            {data.map((item) => (
              <div className="border border-danger" onClick={() => navigate(`/product/${item._id}`)} >
                {console.log(item._id)}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiv4B-1T3IG7iG3F_GSrOxDPBeERGU4EMTQ&usqp=CAU"
                 alt="error" />
                 <h1 className="text-center">{item.name}</h1>
                 <h2 className="text-center">{item.price}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
