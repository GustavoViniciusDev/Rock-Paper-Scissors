import "./game.css";
import rockIcon from "../images/icon-rock.svg";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface GameProps {
  playerChoice: string | null;
  computerChoice: string | null;
  setPlayerChoice: Dispatch<SetStateAction<string | null>>;
  setComputerChoice: Dispatch<SetStateAction<string | null>>;
  onPlayAgain: () => void;
}

export default function Game({
  playerChoice,
  computerChoice,
  setPlayerChoice,
  setComputerChoice,
  onPlayAgain,
}: GameProps) {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (playerChoice && computerChoice) {
      if (playerChoice === computerChoice) {
        setResult("It's a Tie!");
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        setResult("YOU WIN");
      } else {
        setResult("YOU LOSE");
      }
      setShowResult(true);
    }
  }, [playerChoice, computerChoice]);

  const handlePlayAgain = () => {
    setShowResult(false);
    setPlayerChoice(null);
    setComputerChoice(null);
    onPlayAgain();
    setResult("");
  };

  const getImageSource = (choice: string): string => {
    switch (choice) {
      case "rock":
        return rockIcon;
      case "paper":
        return paperIcon;
      case "scissors":
        return scissorsIcon;
      default:
        return "";
    }
  };

  return (
    <>
      <div className="container_game">
        <div className="container_picked">
          <h1>YOU PICKED</h1>
          <div className="you_picked">
            <div className="circle_picked">
              {playerChoice && (
                <div className={`circle_game circle_${playerChoice}_game`}>
                  <img
                    className={`img_${playerChoice}`}
                    src={getImageSource(playerChoice)}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container_result_game">
          {showResult && (
            <div className="result-box">
              <p className={result === "You Lose!" ? "lose" : ""}>{result}</p>
              <button
                className={`btn_result ${result === "You Lose!" ? "lose" : ""}`}
                onClick={handlePlayAgain}
              >
                Play Again
              </button>
            </div>
          )}
        </div>
        <div className="container_hpicked">
          <h1>THE HOUSE PICKED</h1>
          <div className="house_picked">
            <div className="circle_hpicked">
              {computerChoice && (
                <div className={`circle_game circle_${computerChoice}_game`}>
                  <img
                    className={`img_${computerChoice}`}
                    src={getImageSource(computerChoice)}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
