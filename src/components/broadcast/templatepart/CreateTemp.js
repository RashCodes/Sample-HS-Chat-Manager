import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function  MyVerticallyCenteredModal(props) {
    return(
        <Modal {...props} size= "lg" aria-labelledby= "contained-modal-title-vcenter" centered>
            <Modal.Header closeButton >
                <Modal.Title >
                TEMPLATE EDITOR
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

function CreateTemp() {

    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
        <p type='button' className='mt-3 mx-2' style={{ textDecorationLine: 'underline', color: '#2f80ed', fontWeight: 'bold', fontFamily: 'Montserrat'}} onClick={() => setModalShow(true)}>Create New Templates</p>

        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} style={{fontWeight: 'bold', fontFamily: 'Montserrat'}}/>
    </>
  );
}

export default CreateTemp;