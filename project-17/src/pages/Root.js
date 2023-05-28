import React from "react";
import { Outlet } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet /> {/* Defines where the content of the child routes should be rendered */}
            </main>
        </>
    );
}

export default RootLayout;