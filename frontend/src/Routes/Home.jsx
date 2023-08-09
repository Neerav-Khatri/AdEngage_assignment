import { Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function Home () {
    const [user, setUser] = useState({ email : "adengage@gmail.com", password : "adengage@123" });

    const login = () => {
        try {
            axios.post("http://localhost:8080/user/login", user)
            .then((res) => {
                console.log(res, res.data.token);
                localStorage.setItem("token", JSON.stringify(res.data.token));
            })
            .catch((err) => console.log(err))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Flex height={"90vh"} justifyContent={"center"} alignItems={"center"} textAlign={"left"}>
                <Flex direction={"column"} border={"1px solid black"} borderRadius={"20px"} p={"20px"} gap={"10px"} fontWeight={"bold"}>
                    <Text>Email address : </Text>
                    <Input type="email" value={user.email} onChange={(e) => setUser({...user, email : e.target.value})} />
                    <Text>Password : </Text>
                    <Input type="password" value={user.password} onChange={(e) => setUser({...user, password : e.target.value})} />
                    <Input type="submit" bg={"skyblue"} color={"black"} onClick={login}/>
                </Flex>
            </Flex>
        </div>
    )
};