import React from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
 
const TimeoutModal = ({ showModal, togglePopup}) => {
  return <Modal isOpen={showModal} toggle={togglePopup} keyboard={false} backdrop="static">
    <ModalHeader>Winner!</ModalHeader>
    <ModalBody>
      You win
    </ModalBody>
  </Modal>
}
 
export default TimeoutModal


import IdleTimer from 'react-idle-timer';
import TimeoutModal from './TimeoutModal';