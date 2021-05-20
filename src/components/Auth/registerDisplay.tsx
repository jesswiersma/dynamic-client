import React, {Component} from 'react';
import RegisterUser from "./registerUser";
import LoginUser from "./loginUser";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const RegisterDisplay: React.FunctionComponent = () => {
   
       return (
      <div>
        {/* <Modal>
          <Button style={{fontFamily: 'Open Sans', backgroundColor:"#ffffff00", border:"0pt solid #ffffff00", color:"#c75a00"}} onClick={toggle1}>Register</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Register with us </ModalHeader>
        <ModalBody>
          <RegisterUser updateToken = {updateToken}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      <Button style={{fontFamily: 'Open Sans', backgroundColor:"#ffffff00", border:"0pt solid #ffffff00", color:"#c75a00"}} onClick={clearToken}>Logout</Button> */}
      </div>
    );
  };

  export default RegisterDisplay;