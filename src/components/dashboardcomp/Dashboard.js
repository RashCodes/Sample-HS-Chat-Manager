import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../whatsappsidebar/Sidebar'
import Linechart from './charts/Linechart'
import Barchart from './charts/Barchart'
import Areachart2 from './charts/Areachart2'
import Areachart3 from './charts/Areachart3'


function Dashboard() {
  return (

    <>
            <Navbar />
        <div className="row">
            <Sidebar />  
        </div>
       <main className="main-content position-relative h-100 border-radius-md contained ">
            <div className="container-fluid g-2">
            <h4 className=' mx-4 mb-3' style={{fontSize:'25px', color: 'black'}}>Dashboard</h4>
                <div className="card pt-4 pb-3 mb-4 maincolor">
                    <div className=" container-fluid">
                        <div className=" container-fluid px-0">
                            <div className="col-12 mt-0 text-center">
                                <div className="col-12  ">
                                    <div className=" row ">
                                        <div className=" card mb-4   ">
                                            <div className=" row px-0 mt-4 mb-4 justify-content-center gx-0 colllgap">
                                                <div className=" col-lg-2 boxShadow">
                                                    <div className=" card move-on-hover h-100" style={{borderRadius:'30px'}}>
                                                        <div className="card-header text-center text-bold "style={{fontSize:"18px", borderRadius:'30px 30px 0px 0px', padding: '5px'}}>Created</div>
                                                        <div className='createdicon'><i className="fas fa-clipboard-check fa-4x"></i></div>
                                                        <div className="body text-center text-bolder" style={{backgroundColor: "#F5F5F5", fontSize: '25px', color: '#2F80ED', padding: '10px'}}>546</div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Total to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>3</span></div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Monthly to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>2</span></div>
                                                     
                                                       
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 boxShadow ">
                                                    <div className="card move-on-hover h-100" style={{borderRadius:'30px'}}>
                                                        <div className="card-header text-center text-bold " style={{fontSize:"18px", borderRadius:'30px 30px 0px 0px', padding: '5px'}}>Unassigned</div>
                                                        <div className='createdicon'><i className="fas fa-question fa-4x"></i></div>
                                                        <div className="body text-center text-bolder " style={{backgroundColor: "#f5f5f5", fontSize: '25px', color: '#2F80ED', padding: '10px'}}>4</div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Total to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>4</span></div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Monthly to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>3</span></div>
                                                      
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 boxShadow ">
                                                    <div className="card move-on-hover h-100" style={{borderRadius:'30px'}}>
                                                        <div className="card-header text-center text-bold "style={{fontSize:"18px", borderRadius:'30px 30px 0px 0px', padding: '5px'}}>Open</div>
                                                        <div className='createdicon'><i className="fas fa-lock-open fa-4x"></i></div>
                                                        <div className="body text-center text-bolder " style={{backgroundColor: "#f5f5f5", fontSize: '25px', color:'#2F80ED', padding: '10px'}}>46</div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Total to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>4</span></div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Monthly to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>3</span></div>
                                                       
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 boxShadow ">
                                                    <div className="card move-on-hover h-100" style={{borderRadius:'30px'}}>
                                                        <div className="card-header text-center text-bold "style={{fontSize:"18px", borderRadius:'30px 30px 0px 0px', padding: '5px'}}>Solved</div>
                                                        <div className='createdicon'><i className="fas fa-check-double fa-4x"></i></div>
                                                        <div className="body text-center text-bolder " style={{backgroundColor: "#f5f5f5", fontSize: '25px', color:'#2F80ED', padding: '10px'}}>365</div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Total to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>2</span></div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Monthly to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>4</span></div>
                                                       
                                                        
                                                    </div>
                                                </div>
                                                <div className="  col-lg-2 boxShadow ">
                                                    <div className="card move-on-hover h-100 " style={{borderRadius:'30px'}}>
                                                        <div className="card-header text-center text-bold"style={{fontSize:"18px", borderRadius:'30px 30px 0px 0px', padding: '5px'}}>Escalated</div>
                                                        <div className='createdicon'><i className="fas fa-sort-amount-up-alt fa-4x"></i></div>
                                                        <div className="body text-center text-bolder" style={{backgroundColor: "#f5f5f5", fontSize: '25px', color: '#2F80ED', padding: '10px'}}>2</div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Total to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>3</span></div>
                                                        <div className="card-footer text-center text-bold " style={{ padding: '7px', fontSize: '18px'}}>Monthly to Date : <span className='text-bolder' style={{color:'#2F80ED', fontSize: '20px'}}>2</span></div>
                                                        
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                        <div className="col-12">
                                        <div className=" pt-2 mt-0 mb-3">
                                            <div className="col-12 pt-3 nav3 text-center">
                                                <h5>Tickets Solved and Created - Last 30 Days</h5>
                                            </div>
                                            <div className="row ">
                                                <div className="col-12 px-2 flexbox">
                                                    <Linechart/>
                                                </div>    
                                            </div>
                                        </div> 
                                        </div>
                                        </div>
                                        <div className=" col-12 mt-4 text center ">
                                            <div className="col-12 ">
                                                <div className="row gx-5 ">
                                                    <div className="col-6">
                                                        <div className="row h-100">
                                                            <div className="card pt-1 px-1">
                                                                <div className="col-xl-12 pt-3  nav3">
                                                                    <h5>Tickets Solved by Customer</h5>
                                                                </div>
                                                                    <Barchart/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-6 gx-5">
                                                        <div className="row " >
                                                            <div className="card pt-1 px-3 ">
                                                                <div className="row">
                                                                    <div className="col-xl-12 pt-3 nav3">
                                                                        <h5>First Response Time - Last 30 Days</h5>
                                                                    </div>
                                                                        <Areachart2/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-4  ">
                                                            <div className="card pt-1 px-3 h-100">
                                                                <div className="row  ">
                                                                    <div className="col-xl-12 pt-3 mx-0 nav3">
                                                                        <h5>Full Resolution Time - Last 30 Days</h5>
                                                                    </div>
                                                                        <Areachart3/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Dashboard;

