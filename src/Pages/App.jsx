import React from "react";
import Applayout from "../Components/App Layout/Applayout";
import { Outlet } from "react-router-dom";

export default function app() {
    return (
        <Applayout>
            <Outlet/>
        </Applayout>
    );
}