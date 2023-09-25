import React from 'react'
import { Button, Stack} from '@mui/material';
import { useState } from 'react';
import Templates from './templatepart/Templates';
import Tags from './tagpart/Tags';
import CreateTemp from './templatepart/CreateTemp'
import ManageTemp from './templatepart/ManageTemp'
import CreateTag from './tagpart/CreateTag';
import ManageTag from './tagpart/ManageTag';



function Navbarcofig() {

    const [show, setShow] = useState (true);
    const [show2, setShow2] = useState (false);

  return (
    <>
        <div className='card col-12 ' style={{backgroundColor: '#ffffff', borderRadius: '15px 15px 15px 15px', fontFamily: 'Montserrat'}}>
            <Stack spacing={2} direction="row" className='mt-3'>
                <Button variant="btn btn px-0" className='col' onClick={()=> {setShow(true); setShow2(false)}} style={{fontSize: '13px', borderRadius: ' 0 15px 0 15px', textTransform: 'capitalize', backgroundColor: '#2F80ED', color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>Templates</Button>
                <Button variant="btn btn px-0" className='col' onClick={()=> {setShow2(true); setShow(false)}}  style={{fontSize: '13px', borderRadius: ' 15px 0 15px 0', textTransform: 'capitalize', backgroundColor: '#2F80ED', color: 'white', fontFamily: 'Montserrat', fontWeight: 'bold'}}>Tags</Button>
     
            </Stack>
        </div>

        {show &&
        <>
        <div className="card col-12 mt-3 p-3 Broadcas scrollbar-primary h-100" style={{borderRadius: '5px', backgroundColor: '#ffffff', fontFamily: 'Montserrat'}}> 

            <div className='col-12'>
                <Templates/>
            </div>
        </div>
        <div className=''>
            <CreateTemp/>
            <ManageTemp/>
        </div>
        </>
        }

        {show2 &&
        <>
        <div className="card col-12 mt-3 p-3 Broadcas scrollbar-primary h-100" style={{borderRadius: '5px', backgroundColor: '#ffffff', fontFamily: 'Montserrat'}}>

            <div className='col-12'>
                <Tags/>
            </div>
        </div>
        <div>
            <CreateTag/>
            <ManageTag/>
        </div>
        </>
        }
    </>
  )
}

export default Navbarcofig;