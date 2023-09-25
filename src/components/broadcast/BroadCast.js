import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../whatsappsidebar/Sidebar'
import Navbarcofig from './Navbarcofig'
import Recipients from './Recipients'
import MessageSender from './MessageSender'
import CreateTemp from './templatepart/CreateTemp'
import ManageTemp from './templatepart/ManageTemp'



function BroadCast() {
  return (
    <>
       <Navbar />
        <div className="row">
            <Sidebar />  
        </div> 

        <main className="main-content position-relative h-100 border-radius-md contained ">
        <div className="container-fluid g-2">
            <div className="card pt-0 pb-3 mb-4 maincolor">
                <div className="container-fluid">
                    <div className="container-fluid p-0">
                      <div className="row col mt-3">
                        <div className="col-4">
                            <div className="card p-2 pb-3 text-bold " style={{borderRadius: '15px 15px 15px 15px',color: '#2F80ED', fontFamily: 'Montserrat', backgroundColor: '#ececec'}}>
                              <div className="row ">
                            <span className=" col text-center " style={{marginTop: '5px', marginBottom: '10px', fontSize: '17px', fontFamily: 'Montserrat'}}>CONFIGURATION</span>
                              </div>
                              <Navbarcofig/>
                            </div>
                            
                        </div>
                        <div className='col-8 sendbcm'>
                            <div className="card p-3 pb-3 text-bold" style={{borderRadius: '15px 15px 15px 15px',color: '#2F80ED', fontFamily: 'Montserrat', backgroundColor: '#ececec'}}>
                            <span className=" col text-center " style={{marginTop: '5px', marginBottom: '10px', fontSize: '17px', fontFamily: 'Montserrat'}}>SEND BROADCAST MESSAGE</span>
                            <Recipients/>
                            <MessageSender/>
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

export default BroadCast