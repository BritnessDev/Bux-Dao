import React from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

const Community = () => (
    <div className="flex flex-row">
        <Sidebar />
        <div>
            <Header />
            <div>Community</div>
        </div>
    </div>
)

export default Community;