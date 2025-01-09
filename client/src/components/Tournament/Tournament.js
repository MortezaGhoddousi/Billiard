import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";  // برای گرفتن اطلاعات از state
import "../../css/tournoment/Tournament.css";

const Tournament = () => {
  const location = useLocation();
  const { tournament } = location.state || {}; // دریافت اطلاعات مسابقه از state

  // گرفتن مسابقات از localStorage (اگر قبلاً ذخیره شده باشد)
  const savedTournaments = JSON.parse(localStorage.getItem('tournaments')) || [];

  // اضافه کردن مسابقه جدید به لیست موجود
  const [tournaments, setTournaments] = useState(savedTournaments);

  useEffect(() => {
    if (tournament) {
      const newTournaments = [...tournaments, tournament];
      setTournaments(newTournaments);

      // ذخیره مسابقات در localStorage
      localStorage.setItem('tournaments', JSON.stringify(newTournaments));
    }
  }, [tournament]);

  const RenderTournament = ({ tournament }) => {
    const players = tournament.players || [];
    const [roundScores, setRoundScores] = useState(Array(players.length).fill(0));
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

    return (
      <div className="bracket-container">
        <h1>{tournament.name}</h1> {/* نمایش نام مسابقه */}
        {renderAllRounds()}
      </div>
    );
  };

  return (
    <div>
      <h1>مسابقات قبلی</h1>
      {tournaments.length === 0 ? (
        <p>هیچ مسابقه‌ای ثبت نشده است</p>
      ) : (
        tournaments.map((tournament, index) => (
          <div key={index}>
            <RenderTournament tournament={tournament} /> {/* نمایش هر مسابقه */}
          </div>
        ))
      )}
    </div>
  );
};

export default Tournament;
