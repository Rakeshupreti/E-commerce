import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Category(){
    const[name, setname] = useState("")
    const[imageurlInput, setimageurlInput] = useState("")

    const navigate = useNavigate()

    function imagecategory(){
        console.log("name", name)
        console.log("imageurlInput" , imageurlInput)

        axios.post('http://localhost:5000/category' , {name: name , imageUrl: imageurlInput })
        .then(response => {
            console.log(response.data)
        })
        .catch(error=> console.log(error))
    }
    return(
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
            <div>
            <input onChange={e => setname(e.target.value)} type="text" placeholder="Item Name" name="uname" required/>
            </div>
            <br />
            <div>
            <input onChange={e => setimageurlInput(e.target.value)} type="text" placeholder="ImageURL" name="uname" required/>
            </div>
            <div>
                <button onClick={imagecategory} type="submit">Login</button>
            </div>
            </div>
        </div>
    )
}

export default Category;