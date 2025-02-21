import React, { useState, useEffect } from "react";
import "../css/Timer.css";
import axios from "axios";

const Timer = ({ price, table, description, startTime, id }) => {
    const [isActive, setIsActive] = useState(false);
    const [timeSpent, setTimeSpent] = useState(0);
    const [Cost, setCost] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [prices, setPrices] = useState([]);
    const [saveTime, setSaveTime] = useState("00: 00: 00");

    const calTime = function (st) {
        const [hours, minutes, seconds] = st.split(":").map(Number);

        const now = new Date();
        const startDateTime = new Date();
        startDateTime.setHours(hours, minutes, seconds);

        const diffMs = now - startDateTime;

        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor(
            (diffMs % (1000 * 60 * 60)) / (1000 * 60)
        );
        const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);

        setTimeSpent(diffHours * 3600 + diffMinutes * 60 + diffSeconds);
        setTotalTime(diffHours * 3600 + diffMinutes * 60 + diffSeconds);
    };

    useEffect(() => {
        if (startTime != null) {
            calTime(startTime);
            setIsActive(!isActive);
            var div = document.querySelector(
                `#table${id} .image-container .overlay`
            );
            div.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    }, []);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                const getLocalStorageData = (key) => {
                    const storedData = localStorage.getItem(key);
                    return storedData ? JSON.parse(storedData) : null;
                };
                const localData = getLocalStorageData(id);
                var st = localData ? localData.startTime : null;
                calTime(st);
            }, 1000);
        } else if (!isActive && timeSpent !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, timeSpent]);

    const handleStartStopClick = (e) => {
        var overlayDiv =
            e.target.parentNode.parentNode.previousSibling.lastChild;
        if (isActive) {
            overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
            const cost = Math.floor(timeSpent * price);
            setCost((prevCost) => prevCost + cost);
            var t = new Date();
            var date = t.toISOString().split("T")[0];
            var time = t.toTimeString().split(" ")[0];
            var dateTime = `${date} ${time}`;
            const logData = { table, Cost: Cost + cost, dateTime, description };
            axios.post("http://localhost:8000/api/log/table/", logData);
            localStorage.removeItem(id);
        } else {
            overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0)";
            var time = new Date();
            localStorage.setItem(
                id,
                JSON.stringify({
                    table: table,
                    startTime: `${time.getHours()}: ${time.getMinutes()}: ${time.getSeconds()}`,
                    description: description,
                })
            );
            var sTime = `${time.getSeconds()}: ${time.getMinutes()}: ${time.getHours()}`;
            setSaveTime(sTime);
        }
        setIsActive(!isActive);
    };

    const handleThis = () => {
        const currentCost = Math.floor(timeSpent * price);
        setPrices([...prices, currentCost]);
        setTimeSpent(0);

        const sum = prices.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            cost
        );
        setCost(sum);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeSpent(0);
        setTotalTime(0);
        setCost(0);
        setPrices([]);
        setSaveTime("00: 00: 00");
    };

    const cost = Math.floor(timeSpent * price);

    const prs = prices.map(function (el, ind) {
        return <p key={ind}>هزینه : تومان {el}</p>;
    });

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    const totalHours = Math.floor(totalTime / 3600);
    const totalMinutes = Math.floor((totalTime % 3600) / 60);
    const totalSeconds = totalTime % 60;

    return (
        <div className="timer">
            <p className="time">
                {" "}
                {formatTime(totalSeconds)} : {formatTime(totalMinutes)} :{" "}
                {formatTime(totalHours)}
            </p>
            <div className="buttons">
                <button onClick={handleStartStopClick}>
                    {isActive ? "پایان" : "شروع"}
                </button>
                <button onClick={handleThis}>باز و بسته</button>
                <button onClick={handleReset}>ریست</button>
            </div>
            <div className="prices">
                <p>ساعت باز شدن میز: {saveTime}</p>
                <p>هزینه جاری : {cost} تومان</p>
                {prs}
                <p>هزینه کل : {Cost} تومان</p>
            </div>
        </div>
    );
};

export default Timer;
