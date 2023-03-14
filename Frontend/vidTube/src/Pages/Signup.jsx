import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const url = "http://localhost:8080"

    const handleemail = (e) => {
        setEmail(e.target.value);
    };

    const handlepassword = (e) => {
        setPassword(e.target.value);
    };

    const handlesignup = () => {
        axios
            .post(`${url}/user/signup`, { email, password })
            .then((res) => {
                console.log(res);
               
                navigate("/login")
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Box>
            <Input type="email" autoComplete="off" autoSave="off" onChange={handleemail} placeholder="enter email" />
            <Input
                type="password"
                placeholder="enter password"
                onChange={handlepassword}
                autoComplete="off"
                color="white"
            />
            <Button onClick={handlesignup}>Sign Up</Button>
            <Link to={"/login"}>Already Signup Login here</Link>
        </Box>
    );
};

export default Signup;
