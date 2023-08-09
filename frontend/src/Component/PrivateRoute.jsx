import { Navigate } from "react-router-dom";

export default function PrivateRoute ({ children }) {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token){
        alert("Kindly login first!");
        return <Navigate to="/" />
    }

    return children;
}