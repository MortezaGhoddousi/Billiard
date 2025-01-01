import React, { useState } from "react";
import "../../css/tournoment/Tournament.css"

const Tournament = () => {
  const initialPlayers = [
    "Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8",
  ];
  

  const [players, setPlayers] = useState(initialPlayers);
  const [roundScores, setRoundScores] = useState(
    Array(initialPlayers.length).fill(0)
  );
  const [winners, setWinners] = useState([[]]);

  const numRounds = Math.log2(players.length);

  const getRoundPlayers = (roundIndex) => {
    if (roundIndex === 0) return players;
    return winners[roundIndex - 1] || [];
  };

  const handleScoreInput = (round, index) => {
    const roundPlayers = getRoundPlayers(round);
    const result = prompt(`Enter score for ${roundPlayers[index]}:`);

    if (result !== null) {
      const updatedScores = [...roundScores];
      updatedScores[index] = parseInt(result, 10);
      setRoundScores(updatedScores);

      if (index % 2 === 1) {
        const pairIndex = Math.floor(index / 2) * 2;
        const winner =
          updatedScores[pairIndex] >= updatedScores[pairIndex + 1]
            ? roundPlayers[pairIndex]
            : roundPlayers[pairIndex + 1];

        const updatedWinners = [...(winners[round] || [])];
        updatedWinners[Math.floor(index / 2)] = winner;

        setWinners((prevWinners) => {
          const newWinners = [...prevWinners];
          newWinners[round] = updatedWinners;
          return newWinners;
        });
      }
    }
  };

  const renderRound = (roundIndex) => {
    const roundPlayers = getRoundPlayers(roundIndex);  // بازیکنان هر راند
    return (
      <div className={`round round-${roundIndex}`} key={roundIndex}>
        <div className="round-matches">
          {roundPlayers.map((player, index) => (
            <section key={index}>
              <div className="match">
                <img
                  className="profile"
                  src="./images/images.png"
                  alt="profile"
                />
                <span>{player}</span>
              </div>
              <p id="result" style={{ color: "black" }}>
                {roundScores[index] || 0}
              </p>
              <button onClick={() => handleScoreInput(roundIndex, index)}>
                Set Score
              </button>
            </section>
          ))}
        </div>
      </div>
    );
  };
  

  const renderAllRounds = () => {
    const rounds = [];
    for (let roundIndex = 0; roundIndex < numRounds; roundIndex++) {
      rounds.push(renderRound(roundIndex));
    }

    if (winners[numRounds - 1] && winners[numRounds - 1][0]) {
      rounds.push(
        <div className="round final-round" key="final-winner">
          <div className="round-matches">
            <section>
              <div className="match">
                <img
                  className="profile"
                  src="./images/images.png"
                  alt="profile"
                  style={{ border: "2px solid gold" }}
                />
                <span>{winners[numRounds - 1][0]}</span>
              </div>
              <p id="result" style={{ color: "black", fontWeight: "bold" }}>
                🏆 Winner
              </p>
            </section>
          </div>
        </div>
      );
    }

    return rounds;
  };

  return <div className="bracket-container">{renderAllRounds()}</div>;
};

export default Tournament;
