import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function  MyVerticallyCenteredModal(props) {
    return(
        <Modal {...props} size= "lg" aria-labelledby= "contained-modal-title-vcenter" centered>
            <Modal.Header closeButton >
                <Modal.Title >
                TAG MANAGER
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {/* Should put a component for Popup Details */}
            </Modal.Body>
            <Modal.Footer>
            <Button style={{ backgroundColor:'#2F80ED'}} onClick={props.onHide}>Close</Button>
            <Button style={{ backgroundColor:'#2F80ED'}} onClick={props.onHide}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

function ManageTag() {

    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>

        <Button className='mt-0 mx-2 btn btn-sm' style={{ fontWeight: 'bold', fontFamily: 'Montserrat', backgroundColor: '#2F80ED'}} onClick={() => setModalShow(true)}>Manage Tags</Button>

        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} style={{fontWeight: 'bold', fontFamily: 'Montserrat'}}/>

    </>
  )
}

export default ManageTag;