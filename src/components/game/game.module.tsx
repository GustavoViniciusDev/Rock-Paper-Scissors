import logo from "../images/logo.svg";
import "./game.css";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import triangle from "../images/bg-triangle.svg";
import Modal from "react-modal";
import close_btn_icon from "../images/icon-close.svg";
import img_rules from "../images/image-rules.svg";
import React from "react";

const customStyleModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement()

export default function Game() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function OpenModalRules() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className="score_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="score">
          <p>SCORE</p>
          <h2>12</h2>
        </div>
      </div>

      <div className="game">
        <div className="paper">
          <div className="circle_color_paper">
            <div className="circle circle_paper">
              <img className="img_paper" src={paper} alt="" />
            </div>
          </div>
        </div>
        <div className="circle_color_scissors">
          <div className="scissors">
            <div className="circle circle_scissors">
              <img className="img_scissors" src={scissors} alt="" />
            </div>
          </div>
        </div>
        <div className="circle_color_rock">
          <div className="rock">
            <div className="circle circle_rock">
              <img className="img_rock" src={rock} alt="" />
            </div>
          </div>
        </div>
        <div className="triangle">
          <img src={triangle} alt="" />
        </div>
      </div>

      <div className="rules">
        <button onClick={OpenModalRules} className="btn_rules">
          RULES
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpdenModal}
        onRequestClose={closeModal}
        style={customStyleModal}
      >
        <div className="modal_rules">
          <div className="nav_rules">
            <h1>RULES</h1>
            <button className="btn_rules" onClick={closeModal}>
              <img className="img_close_rules" src={close_btn_icon} alt="btn close" />
            </button>
          </div>

          <div className="img_rules">
            <img src={img_rules} alt="img rules" />
          </div>
        </div>
      </Modal>
    </div>
  );
}
