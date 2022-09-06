import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Register(){

    const [emailInput, setemailInput] = useState("")
    const [nameInput, setnameInput] = useState("")
    const [passwordInput, setpasswordInput] = useState("")
    const [phoneInput, setphoneInput] = useState("")

    // name, emailAddress, password, phoneNumber
    const navigate = useNavigate()

    function registeruser(){
        console.log("email", emailInput)
        console.log("name", nameInput)
        console.log("password", passwordInput)
        console.log("phone", phoneInput)


        axios
        .post('http://localhost:5000/users/register' , {emailAddress: emailInput, name: nameInput , password: passwordInput , phoneNumber: phoneInput} )
        .then(response => {
            console.log(response.data)

        })
        .catch(error=> console.log(error))
    }
    return(
        <div className="Register">
            <div className="d-flex flex-column ">
                <div >
                <input onChange={e => setnameInput(e.target.value)} type="text" placeholder="Enter Username" name="uname" required/>
                <br />
                </div>
                <div>
                    <input onChange={e => setemailInput(e.target.value)} type="text" placeholder="Enter email" name="name" required />
                </div>
                <br />
                <div>
                <input onChange={e => setpasswordInput(e.target.value)} type="password" placeholder="Enter Password" name="psw" required/>
                <br />
                </div>
                <br />
                <div>
                    <input onChange={e => setphoneInput(e.target.value)} type="tel" placeholder="Enter phoneNumber" pattern="[0-9]" required />
                </div>
                <div>
                <button onClick={registeruser} type="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Register