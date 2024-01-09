
import { useState } from 'react';
import Choice from './components/choice/choice.module';
import Game from './components/game/game.module';
import Rules from './components/rules/rules.modules';
import Score from './components/score/score.module';

function App() {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [choiceVisible, setChoiceVisible] = useState(true);

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);

    const choices = ['rock', 'paper', 'scissors'].filter(option => option !== choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);
    setChoiceVisible(false);
  };

  const handlePlayAgain = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setChoiceVisible(true);
  };

  return (
    <>
      <Score />
      {choiceVisible && <Choice onPlayerChoice={handlePlayerChoice} />}
      {playerChoice && computerChoice && (
        <Game
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          setPlayerChoice={setPlayerChoice}
          setComputerChoice={setComputerChoice}
          onPlayAgain={handlePlayAgain}
        />
      )}
      <Rules />
    </>
  );
}

export default App;