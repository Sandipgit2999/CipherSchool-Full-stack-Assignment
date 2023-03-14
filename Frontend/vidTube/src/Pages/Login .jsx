import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Input } from "@chakra-ui/react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "http://localhost:8080"

    const navigate=useNavigate();

    const handleemail = (e) => {
        setEmail(e.target.value);
    };

    const handlepassword = (e) => {
        setPassword(e.target.value);
    };

    const handlelogin = () => {
        axios
            .post(`${url}/user/login`, { email, password })
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token)
                navigate("/")

            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Box>
            <Input type="email" onChange={handleemail} placeholder="enter email" />
            <Input
                type="password"
                placeholder="enter password"
                onChange={handlepassword}
            />
            <Button onClick={handlelogin}>Login</Button>
            <Link to={"/signup"}>Don't have account signup here</Link>
        </Box>
    );
};

export default Login;
