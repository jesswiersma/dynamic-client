import React, {Component} from "react";
//import RegisterAdmin from "../Auth/registerAdmin";
//import LoginAdmin from "../Auth/loginAdmin";
import AnnouncementCreate from "./Announcement/CreateAnnounce";
import DisplayAnnounce from "./Announcement/DisplayAnnounce";

const AdminHome: React.FunctionComponent = () => {
    return (
        <div>
            <h2>Admin Home</h2>
            {/* <RegisterAdmin/>
            <LoginAdmin/> */}
            <AnnouncementCreate/>
            <DisplayAnnounce/>
            
        </div>
    )
    
}
        

    
export default AdminHome;