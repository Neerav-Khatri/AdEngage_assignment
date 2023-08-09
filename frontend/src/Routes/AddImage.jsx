import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function AddImage () {
    const [data, setData] = useState({ title: "", description : "", keywords: "", date: "", imgUrl: "" });

    const handleAdd = () => {
        if (!data.title || !data.description || !data.keywords || !data.date || !data.imgUrl){
            return alert("Please fill all the required fields!");
        }

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("descriptions", data.description);
        formData.append("keywords", data.keywords);
        formData.append("date", data.date);
        formData.append("imgUrl", data.imgUrl);

        try {
            axios.post("http://localhost:8080/data/add", formData, {headers: {"authorization" : JSON.parse(localStorage.getItem("token"))}})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Flex height={"90vh"} justifyContent={"center"} alignItems={"center"}>
                <Flex boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} p={"20px"} borderRadius={"20px"} gap={"10px"} direction={"column"}>
                    <Heading>Add Image</Heading>
                    <Input type="text" placeholder="Title" onChange={(e) => setData({...data, title: e.target.value})}/>
                    <Input type="text" placeholder="Description" onChange={(e) => setData({...data, description: e.target.value})}/>
                    <Input type="text" placeholder="Keywords" onChange={(e) => setData({...data, keywords: e.target.value})}/>
                    <Input type="date" onChange={(e) => setData({...data, date: e.target.value})}/>
                    <Input type="file" onChange={(e) => setData({...data, imgUrl: e.target.files[0]})}/>
                    <Button colorScheme="blue" onClick={handleAdd}>Add</Button>
                </Flex>
            </Flex>
        </div>
    )
};