import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../API";
import "../../css/tournoment/Tournament.css";

function Tournament() {
    // const [players, setPlayers] = useState([]); // ✅ Default state is an empty array
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchPlayers = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `${api}/api/tournament/register-player` // ✅ Correct API route
    //             );

    //             if (response.data.success) {
    //                 setPlayers(response.data.players);
    //             } else {
    //                 setPlayers([]);
    //             }
    //         } catch (err) {
    //             console.error("❌ Error fetching players:", err);
    //             setError("خطا در دریافت اطلاعات بازیکنان");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchPlayers();
    // }, []); // ✅ Runs only once on mount
    const players1 = [
        { name: "player1", score: 3 },
        { name: "player2", score: 2 },
        { name: "player3", score: 1 },
        { name: "player4", score: 2 },
    ];

    const players2 = [
        { name: "player1", score: 3 },
        { name: "player2", score: 2 },
        { name: "player3", score: 1 },
        { name: "player4", score: 2 },
    ];

    const matchup1 = players1.map(function (player, index) {
        return <Matchup player1={player} player2={players2[index]} />;
    });

    return (
        <>
            <Header navActive={{ tables: true }} />
            <header class="hero">
                <div class="hero-wrap">
                    <p class="intro" id="intro">
                        مسابقات اسنوکر باشگاه آریامن
                    </p>
                    <h1 id="headline">مسابقات هفتگی</h1>
                    <p class="year">
                        <i class="fa fa-star"></i> 1404{" "}
                        <i class="fa fa-star"></i>
                    </p>
                </div>
            </header>

            <section id="bracket">
                <div class="container">
                    <div class="split split-one">
                        <div class="round round-one current">
                            <div class="round-details">
                                مرحله اول
                                <br />
                                <span class="date">20 اسفند</span>
                            </div>
                            {matchup1}
                        </div>
                        <div class="round round-two">
                            <div class="round-details">
                                مرحله دوم
                                <br />
                                <span class="date">22 اسفند</span>
                            </div>
                            {[...Array(2)].map((_, i) => (
                                <Matchup
                                    key={i}
                                    player1={null}
                                    player2={null}
                                />
                            ))}
                        </div>
                        <div class="round round-three">
                            <div class="round-details">
                                مرحله سوم
                                <br />
                                <span class="date">24 اسفند</span>
                            </div>
                            <Matchup player1={null} player2={null} />
                        </div>
                    </div>

                    <div class="champion">
                        <div class="final">
                            <i class="fa fa-trophy"></i>
                            <div class="round-details">
                                فینال <br />
                                <span class="date">25-26 اسفند</span>
                            </div>
                            <Matchup player1={null} player2={null} />
                        </div>
                    </div>

                    <div class="split split-two">
                        <div class="round round-three">
                            <div class="round-details">
                                مرحله سوم
                                <br />
                                <span class="date">24 اسفند</span>
                            </div>
                            <Matchup player1={null} player2={null} />
                        </div>
                        <div class="round round-two">
                            <div class="round-details">
                                مرحله دوم
                                <br />
                                <span class="date">20 اسفند</span>
                            </div>
                            {[...Array(2)].map((_, i) => (
                                <Matchup
                                    key={i}
                                    player1={null}
                                    player2={null}
                                />
                            ))}
                        </div>
                        <div class="round round-one current">
                            <div class="round-details">
                                مرحله اول
                                <br />
                                <span class="date">18 اسفند</span>
                            </div>
                            {matchup1}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Matchup(props) {
    const player1 = props.player1 ? props.player1 : { name: "", score: "" };
    const player2 = props.player2 ? props.player2 : { name: "", score: "" };

    return (
        <ul class="matchup">
            <li class="team team-top">
                {player1.name}
                <span class="score">{player1.score}</span>
            </li>
            <li class="team team-bottom">
                {player2.name}
                <span class="score">{player2.score}</span>
            </li>
        </ul>
    );
}

export default Tournament;
