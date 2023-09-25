import { NavLink } from "react-router-dom";

import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';

const Sidebar = () => {

    
    return ( 
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 mt-6 my-0 px-0 fixed-start ms-0 bg-gray-200" id="sidenav-main">
        <hr className="horizontal dark mt-0" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main" >
            <ul className="navbar-nav navspacer">
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/dashboard" >
                        <DashboardIcon style={{fontSize:"x-large", marginLeft: "5px"}}></DashboardIcon>
                        <span className="nav-link-text" style={{fontSize: "13.5px", marginLeft: '10px'}}>Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/whatsappmanager">
                        <ChatIcon style={{fontSize:"x-large", marginLeft: "5px"}}></ChatIcon>
                        <span className="nav-link-text" style={{fontSize: "13.5px", marginLeft: '10px'}}>Chat Manager</span>
                    </NavLink>
                </li>
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/broadcast" >
                        <SendIcon style={{fontSize:"x-large",  marginLeft: "5px"}}></SendIcon>
                        <span className="nav-link-text" style={{fontSize: "13.5px", marginLeft: '10px'}}>BroadCast Messages</span>
                    </NavLink>
                </li>
              
            </ul>
        </div>
    </aside>
     );
}
export default Sidebar ;