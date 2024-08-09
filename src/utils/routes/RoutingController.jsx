import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginForm from "../../widgets/LoginForm";
import SignUpForm from "../../widgets/SignUpForm";
import LandingPage from "../../widgets/LandingPage";
import Dashboard from "../../widgets/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const RoutingController = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/SignUpForm' element={<SignUpForm/>}/>
                <Route path='/LoginForm' element={<LoginForm/>}/>
                <Route path="/dashboard"
                       element={
                           <ProtectedRoute>
                               <Dashboard/>
                           </ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutingController;