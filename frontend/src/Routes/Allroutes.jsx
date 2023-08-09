import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddImage from "./AddImage";
import Images from "./Images";
import PrivateRoute from "../Component/PrivateRoute";

export default function AllRoutes () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<PrivateRoute><AddImage /></PrivateRoute>} />
                <Route path="/image" element={<PrivateRoute><Images /></PrivateRoute>} />
            </Routes>
        </div>
    )
};