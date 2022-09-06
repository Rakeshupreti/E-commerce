import React, {useEffect , useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Login(){
    const navigate = useNavigate()

    const [emailAddress, setEmailAddress]= useState("");
    const [password, setPassword]= useState("");

    function loginuser(){
        console.log('emailaddress',emailAddress)
        console.log('password',password)


        axios.post('http://localhost:5000/users/login' , {emailAddress: emailAddress , password: password })
        .then(response =>{
            console.log(response.data)
            if (response.data.status == 200){
                console.log(response.data.data._id);
                localStorage.setItem("userId",response.data.data._id);
                localStorage.setItem('isLoggedIn', "true");
                navigate("/");
            }
        })
        .catch(error => console.log(error))
    
    }
    return(
        <div className="d-flex justify-content-center ">
            <div className="d-flex flex-column ">
                <div >
                <input onChange={e=> setEmailAddress(e.target.value)} type="text" placeholder="Enter Username" name="uname" required/>
                <br />
                </div>
                <br />
                <div>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="psw" required/>
                <br />
                </div>
                <br />
                <div>
                <button onClick={loginuser} type="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login