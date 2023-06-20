import React from "react";
import { Outlet } from "react-router-dom";

function movies(){
    return(
        <div>
            <Outlet/>
        </div>
    );
}
export default movies;