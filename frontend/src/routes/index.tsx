import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListCars from "../pages/ListCars";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Cars from "../pages/Cars";
import PrivateRoute from "../components/PrivateRoute";
import AddNew from "../pages/AddCars";
import Update from "../pages/UpdateCars";

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<ListCars />} />
                <Route path="/login" element={<Login />} />

                <Route 
                    path="/admin/*" 
                    element={
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/admin/cars/*" 
                    element={
                        <PrivateRoute>
                            <Cars/>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/admin/cars/add" 
                    element={
                        <PrivateRoute>
                            <AddNew/>
                        </PrivateRoute>
                    }
                />
                <Route 
                    path="/admin/cars/update" 
                    element={
                        <PrivateRoute>
                            <Update/>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterApp;