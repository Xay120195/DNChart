import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import ROUTES_URL from "../routing/url";
import ProtectedRoute from "./protectedRoute"


const AppRoute = () => {
    return (
       
        <>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/options/:optiontype" element={<Dashboard name={"SampleName"} />} />

                {/* <Route path={ROUTES_URL.LOGIN} element={<Login />} />  */}

                {/* <Route
                    path={ROUTES_URL.LOGIN}
                    element={
                        <Login />
                    }
                /> */}
                {/* <Route
                    path={ROUTES_URL.DASHBOARD}
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                /> */}

                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </>
    );
}

export default AppRoute;