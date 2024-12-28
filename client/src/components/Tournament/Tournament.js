import React, { useState } from "react";
import "../../css/Tournament.css";

const Tournament = () => {
  const initialPlayers = [
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
    "Player 7",
    "Player 8",
  ];

  const [players, setPlayers] = useState(initialPlayers);
  const [roundScores, setRoundScores] = useState(
    Array(initialPlayers.length).fill(0)
  );
  const [winners, setWinners] = useState([[]]); // ابتدا یک آرایه خالی برای برندگان داریم

  const numRounds = Math.log2(players.length);

  const getRoundPlayers = (roundIndex) => {
    if (roundIndex === 0) return players; // راند اول، تمام بازیکنان
    return winners[roundIndex - 1] || []; // برای راندهای بعدی، برندگان راند قبلی
  };

  const handleScoreInput = (round, index) => {
    const result = prompt(`Enter score for ${getRoundPlayers(round)[index]}:`);
    if (result !== null) {
      const updatedScores = [...roundScores];
      updatedScores[index] = parseInt(result, 10);
      setRoundScores(updatedScores);

      if (round === 0 && index % 2 === 1) {
        // برای راند اول، مقایسه دو بازیکن و انتخاب برنده
        const pairIndex = Math.floor(index / 2) * 2;
        const winner =
          updatedScores[pairIndex] >= updatedScores[pairIndex + 1]
            ? players[pairIndex]
            : players[pairIndex + 1];

        const updatedWinners = [...winners[round]];
        updatedWinners[Math.floor(pairIndex / 2)] = winner;

        setWinners((prevWinners) => {
          const updatedWinnersList = [...prevWinners];
          updatedWinnersList[round] = updatedWinners;
          return updatedWinnersList;
        });
      } else {
        // بعد از راند اول، باید برنده‌ها را برای راند بعدی ذخیره کنیم
        if (index % 2 === 1) {
          const pairIndex = Math.floor(index / 2) * 2;
          const winner =
            updatedScores[pairIndex] >= updatedScores[pairIndex + 1]
              ? getRoundPlayers(round)[pairIndex]
              : getRoundPlayers(round)[pairIndex + 1];

          const updatedWinners = winners[round] || [];
          updatedWinners[Math.floor(index / 2)] = winner;

          setWinners((prevWinners) => {
            const updatedWinnersList = [...prevWinners];
            updatedWinnersList[round] = updatedWinners;
            return updatedWinnersList;
          });
        }
      }
    }
  };

  const renderRound = (roundIndex) => {
    const roundPlayers = getRoundPlayers(roundIndex);
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
    return rounds;
  };

  return <div className="bracket-container">{renderAllRounds()}</div>;
};

export default Tournament;
