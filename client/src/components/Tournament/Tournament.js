import React, { useState } from "react";
import "../../css/Tournament.css";

const Tournament = () => {
  const initialPlayers = [
    "Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8",
    "Player 9", "Player 10", "Player 11", "Player 12", "Player 13", "Player 14", "Player 15", "Player 16",
    "Player 17", "Player 18", "Player 19", "Player 20", "Player 21", "Player 22", "Player 23", "Player 24",
    "Player 25", "Player 26", "Player 27", "Player 28", "Player 29", "Player 30", "Player 31", "Player 32",
    "Player 33", "Player 34", "Player 35", "Player 36", "Player 37", "Player 38", "Player 39", "Player 40",
    "Player 41", "Player 42", "Player 43", "Player 44", "Player 45", "Player 46", "Player 47", "Player 48",
    "Player 49", "Player 50", "Player 51", "Player 52", "Player 53", "Player 54", "Player 55", "Player 56",
    "Player 57", "Player 58", "Player 59", "Player 60", "Player 61", "Player 62", "Player 63", "Player 64"
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
