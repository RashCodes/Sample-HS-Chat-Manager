import React from 'react'
import { Button, Stack} from '@mui/material';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function CardRight() {

  const [show, setShow] = useState (true);
  const [show2, setShow2] = useState (false);

  const handleInfoDetailsClick = () => {
    setShow (true);
    setShow2 (false);
  };

  const handleFinancialDetailsClick = () => {
    setShow (false);
    setShow2 (true);
  };


  return (
    <>
    <div className='card mt-0' style={{backgroundColor: '#ffffff', borderRadius: '0 0 15px 15px', fontFamily: 'Montserrat'}}>
      <Stack spacing={2} direction="row">
        
        <Button variant="btn btn px-0" className='col ' onClick={handleInfoDetailsClick} style={{fontSize: '13px', borderRadius: ' 0 15px 0 15px', textTransform: 'capitalize', backgroundColor: '#2F80ED', color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>Information Details</Button>
        <Button variant="btn btn px-0" className='col ' onClick={handleFinancialDetailsClick} style={{fontSize: '13px', borderRadius: ' 15px 0 15px 0', textTransform: 'capitalize', backgroundColor: '#2F80ED', color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>Finance Details</Button>
      
      </Stack>
    </div>
    
    {show && 

    <div className="card col mt-4 scrollbar-primary " style={{borderRadius: '10px', backgroundColor: '#ffffff', fontFamily: 'Montserrat'}}>
      <div className="row texth1">
         <div className=" row col-12 texth1 userrow">
            <div className=' col-6 '>
               <h6>First Name</h6>
            </div> 
            <div className=' col-6 text-end texth2' >
               <h6>Aziah Binti</h6>
            </div>
         </div>
         <div className=" row col-12 texth1 userrow">
            <div className=' col-6 '>
               <h6>Last Name</h6>
            </div> 
            <div className=' col-6 text-end texth2' >
               <h6>Yaacub</h6>
            </div>
         </div>
         <div className=" row col-12 texth1 userrow">
            <div className=' col-6 '>
               <h6>Date of Birth</h6>
            </div> 
            <div className=' col-6 text-end texth2' >
               <h6>28-12-1972</h6>
            </div>
         </div>
         <div className=" row col-12 texth1 userrow">
            <div className=' col-6 '>
               <h6>Identification Number</h6>
            </div> 
            <div className=' col-6 text-end texth2' >
               <h6>72122804****</h6>
            </div>
         </div>
         <div className=" row col-12 texth1 userrow">
            <div className=' col-6 '>
               <h6>Email</h6>
            </div> 
            <div className=' col-6 text-end texth2' >
               <h6>norain@kollect.com</h6>
            </div>
         </div> 
      </div>
    </div>
    }

{show2 && 
    
<div className="card col mt-4 details scrollbar-primary " style={{borderRadius: '10px', backgroundColor: '#ffffff', fontFamily: 'Montserrat'}}>
     <div>
       <Accordion>
            <div className="row col-12 mx-1 mt-3 mb-3">
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat', color: '#2F80ED'}}>Account Number(s)</Typography>
            </div>
       </Accordion>
       <Accordion>
              <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{color: '#2F80ED'}}></ExpandMoreIcon>}
                    >
                    <Typography><h6 style={{fontFamily: 'Montserrat', fontSize: '14px'}}>35018654125487000<p style={{fontSize: '13px'}}>Personal Financing</p></h6></Typography>
              </AccordionSummary>
            <AccordionDetails>
                  <Typography>
                      <div className="card col " style={{borderRadius: '10px', backgroundColor: '#ffffff', fontFamily: 'Montserrat'}}>
                          <div className="row texth1">
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Total Financing Received</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>RM 170,000.00</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Profit Rate</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>3.99%</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Tenure</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>180 Months</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Financing Start Date</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>01-08-2013</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Financing End Date</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>02-01-2023</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Monthly Installment Amount</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>RM ****</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Total Overdue Amount</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>RM ****</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Total Outstanding Amount</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>RM ****</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Monthly MIA</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>RM ****</h6>
                                </div>
                            </div>
                            <div className=" row col-12 texth1 userrow">
                                <div className=' col-6 '>
                                  <h6>Monthly DIA</h6>
                                </div> 
                                <div className=' col-6 text-end texth2' >
                                  <h6>RM ****</h6>
                                </div>
                            </div>
                          </div>
                        </div>
                  </Typography>
            </AccordionDetails>
       </Accordion>

       <Accordion>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon style={{color: '#2F80ED'}}></ExpandMoreIcon>}
         >
           <Typography><h6 style={{fontFamily: 'Montserrat', fontSize: '14px'}}>85018174581200000 <p style={{fontSize: '13px'}}>Mortgage Financing</p></h6></Typography>
         </AccordionSummary>
         <AccordionDetails>
           <Typography>
           <div className="card col " style={{borderRadius: '10px', backgroundColor: '#ffffff', fontFamily: 'Montserrat'}}>
              <div className="row texth1">
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Total Financing Received</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM 170,000.00</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Profit Rate</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>3.99%</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Tenure</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>180 Months</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Financing Start Date</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>01-08-2013</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Financing End Date</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>02-01-2023</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Monthly Installment Amount</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Total Overdue Amount</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Total Outstanding Amount</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Monthly MIA</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Monthly DIA</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
              </div>
            </div>
           </Typography>
         </AccordionDetails>
       </Accordion>

       <Accordion>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon style={{color: '#2F80ED'}}></ExpandMoreIcon>}
         >
           <Typography><h6 style={{fontFamily: 'Montserrat', fontSize: '14px'}}>6509856327920000 <p style={{fontSize: '13px'}}>Home Equity Financing</p></h6></Typography>
         </AccordionSummary>
         <AccordionDetails>
           <Typography>
           <div className="card col " style={{borderRadius: '10px', backgroundColor: '#ffffff', fontFamily: 'Montserrat'}}>
              <div className="row texth1">
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Total Financing Received</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM 170,000.00</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Profit Rate</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>3.99%</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Tenure</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>180 Months</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Financing Start Date</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>01-08-2013</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Financing End Date</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>02-01-2023</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Monthly Installment Amount</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Total Overdue Amount</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Total Outstanding Amount</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Monthly MIA</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
                <div className=" row col-12 texth1 userrow">
                    <div className=' col-6 '>
                      <h6>Monthly DIA</h6>
                    </div> 
                    <div className=' col-6 text-end texth2' >
                      <h6>RM ****</h6>
                    </div>
                </div>
              </div>
            </div>
           </Typography>
         </AccordionDetails>
       </Accordion>
     </div>
</div>
    }
    </>
  )
}

export default CardRight