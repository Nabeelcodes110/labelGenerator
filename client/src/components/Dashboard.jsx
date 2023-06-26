import React from "react";
import { user } from "./Login";

const Dashboard = ()=>{
    return (
        <div>
            Dashboard
            {user.Username}
            {user.Password}
        </div>
    )
}

export default Dashboard;