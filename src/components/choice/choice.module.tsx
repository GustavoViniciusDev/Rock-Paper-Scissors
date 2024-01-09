import "./choice.css";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import triangle from "../images/bg-triangle.svg";
import { useState } from "react";

interface ChoiceProps {
  onPlayerChoice: (choice: string) => void;
}

export default function Choice({ onPlayerChoice }: ChoiceProps) {
  const [choiceVisible, setChoiceVisible] = useState(true);

  const handlePlayerChoice = (choice: string) => {
    setChoiceVisible(false);
    onPlayerChoice(choice);
  };

  return (
    choiceVisible && (
      <div className="container_choice">
        <div className="choice">
          <div className="paper" onClick={() => handlePlayerChoice('paper')}>
            <div className="circle_color_paper">
              <div className="circle circle_paper">
                <img className="img_paper" src={paper} alt="" />
              </div>
            </div>
          </div>
          <div className="scissors" onClick={() => handlePlayerChoice('scissors')}>
            <div className="circle_color_scissors">
              <div className="circle circle_scissors">
                <img className="img_scissors" src={scissors} alt="" />
              </div>
            </div>
          </div>
          <div className="rock" onClick={() => handlePlayerChoice('rock')}>
            <div className="circle_color_rock">
              <div className="circle circle_rock">
                <img className="img_rock" src={rock} alt="" />
              </div>
            </div>
          </div>
          <div className="triangle">
            <img src={triangle} alt="" />
          </div>
        </div>
      </div>
    )
  );
}