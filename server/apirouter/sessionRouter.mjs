
import express from "express";

import { startTimer, stopTimer, getTimerStatus } from "../db.mjs";
const sessoinRouter = express.Router();
sessoinRouter.post("/start", (req, res) => {
    const { tableId } = req.body;
    startTimer(tableId)
        .then((result) =>
            res.status(201).json({ message: "Timer started.", ...result })
        )
        .catch((err) => res.status(500).json({ error: err.message }));
});
sessoinRouter.post("/stop", (res, req) => {
    const { sessionId, rate } = req.body;
    stopTimer(sessionId, rate)
        .then((result) =>
            res.status(200).json({ message: "Timer stopped.", ...result })
        )
        .catch((err) => res.status(500).json({ error: err.message }));
});
sessoinRouter.get("/status/:sessionId", (req, res) => {
    const { sessionId } = req.params;
    getTimerStatus(sessionId)
        .then((result) => {
            if (result) res.status(200).json(result);
            else res.status(404).json({ message: "Session not found." });
        })
        .catch((err) => res.status(500).json({ error: err.message }));
});

export default sessoinRouter;
