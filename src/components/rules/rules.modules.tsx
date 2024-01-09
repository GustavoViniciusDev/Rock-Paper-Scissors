
import Modal from "react-modal";
import close_btn_icon from "../images/icon-close.svg";
import img_rules from "../images/image-rules.svg";
import React from "react";

import './rules.css';

const customStyleModal = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      borderRadius: "15px",
      padding:"40px",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement('#root');



export default function Rules() {

    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function OpenModalRules() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
  return (
    <>
      <div className="rules">
        <button onClick={OpenModalRules} className="btn_rules">
         RULES
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyleModal}
      >
        <div className="modal_rules">
          <div className="nav_rules">
            <h1>RULES</h1>
            <button className="btn_close" onClick={closeModal}>
              <img
                className="img_close_rules"
                src={close_btn_icon}
                alt="btn close"
              />
            </button>
          </div>

          <div className="img_rules">
            <img src={img_rules} alt="img rules" />
          </div>
        </div>
      </Modal>
    </>
  );
}
