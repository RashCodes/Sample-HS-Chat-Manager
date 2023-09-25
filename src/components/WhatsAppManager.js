import Navbar from "./Navbar";
import Sidebar from "./whatsappsidebar/Sidebar";
import Whatsnavbar from "./whatsappcomps/Whatsnavbar";
import Avatar from '@mui/material/Avatar';
import StyledBadge from '@mui/material/Badge';
import CardMiddle from "./whatsappcomps/CardMiddle";
import CardLeft from "./whatsappcomps/CardLeft";
import CardRight from "./whatsappcomps/CardRight";

 const WhatsAppManager = () =>{

    const user = localStorage.getItem('user');
   
    return(
    <>
            <Navbar />
        <div className="row">
            <Sidebar />  
        </div> 
                <main className="main-content position-relative h-100 border-radius-md contained  ">
                    <div className="container-fluid g-2 ">
                        <div className="card pt-3 pb-3 mb-4 maincolor">
                            <div className="container-fluid">
                                <div className="container-fluid px-0 ">
                                    <div className="col-12">
                                        <Whatsnavbar/> 
                                        <div className="row col mt-3 px-0" >
                                                {/* Card 1 Left Start */}
                                            <div className="col-3 px-0 ">
                                                <div className=" card px-2 pb-2 text-bold" style={{borderRadius: '15px 15px 15px 15px',color: '#2F80ED', fontFamily: 'Montserrat'}}>
                                                    <span className=" col mt-3" style={{marginLeft: '5px', marginTop: '10px', marginBottom: '6px', fontSize: '17px', fontFamily: 'Montserrat'}} type="button">Customers
                                                    </span>
                                                        <CardLeft/>
                                                </div>
                                            </div>
                                                {/* Card 1 Left End */}

                                                {/* Card 2 Middle Start */}

                                            <div className="col-6 ">
                                                <div className="card px-2 pb-2 text-bold" style={{borderRadius: '15px 15px 0px 0px',color: '#2F80ED', fontFamily: 'Montserrat'}}>
                                                    <div className=" row col-12 mt-2 ">
                                                        <div className="col-6 mt-2">
                                                                <span style={{ marginLeft: '5px', fontSize: '17px'}}>Aziah Binti Yaacub</span>
                                                        </div>
                                                        <div className=" col-6 text-end "> 
                                                            <StyledBadge
                                                                overlap="circular"
                                                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} >
                                                                <Avatar alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU"/>
                                                                <span style={{ marginLeft: '5px', marginTop: '5px', fontSize: '17px'}}>{user}</span>
                                                            </StyledBadge>
                                                        </div>
                                                    </div> 
                                                </div>
                                                <CardMiddle/>
                                            </div>
                                            <div className="col-3 px-0">
                                                <div className="card px-2 pb-2 text-bold" style={{borderRadius: '15px 15px 0px 0px',color: '#2F80ED', fontFamily: 'Montserrat'}}>
                                                    <div className="mt-2">
                                                        <StyledBadge
                                                            overlap="circular"
                                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}>
                                                            <Avatar isonline="active" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU"/>
                                                            <span style={{ marginLeft: '5px', marginTop: '5px', fontSize: '17px'}}>Aziah Binti Yaacub</span>
                                                        </StyledBadge>
                                                    </div>
                                                </div>
                                                <CardRight/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
    </>
    )
}

export default WhatsAppManager ;