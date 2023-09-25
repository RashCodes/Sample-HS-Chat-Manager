import { NavLink } from "react-router-dom";
import React from 'react';

    const Navbar = () => {
    // const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const user = JSON.parse(localStorage.getItem('user'));
    const user = localStorage.getItem('user')
    const avatar = JSON.parse(localStorage.getItem('avatar'));
    // const customer_name = localStorage.getItem('customer_name');

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/";
    };
    return ( 
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-0 shadow- border-radius-md fixed-start sticky-top border-bottom bordertester" id="navbarBlur"
                navbar-scroll="true" style={{backgroundColor: "white", position: "fixed", width: "100%"}}>
            <div className="container-fluid py-0 px-3" >
                <nav aria-label="breadcrumb ">
                    <NavLink className="navbar-brand font-weight-bolder mb-0 fs-4 align-middle " to="/">
                        <img src={require('../assets/img/logos/HSLogo.png')} height="50" className="d-inline-block" alt="" />
                        Web App
                    </NavLink>
                    <h4 className="d-inline-flex align-middle"> &nbsp;| &nbsp;</h4>
                    <span className="d-inline-flex align-middle colorfix ">Welcome, &nbsp;</span> 
                    <span className="text-bolder text-capitalize align-middle colorfix" >{user}</span>
                </nav>
            </div>
            <NavLink to="/profile"><img src={avatar} alt="" style={{width: "30px", marginRight: "10px"}} /></NavLink>
            <NavLink onClick={handleLogout} style={{marginRight: "2%"}}>Logout</NavLink>
        </nav>
     );
}
 
export default Navbar;