import express from 'express';
import bodyParser from 'body-parser';

const sessoinrouter = express.Router();
import {
getTimerStatus,
stopTimer,
startTimer
} from '../db.mjs';
sessoinrouter.post("/start-timer", (req, res) => {
  const { tableId } = req.body;

  startTimer(tableId)
    .then((result) => {
      res.status(200).json({ message: "Timer started.", sessionId: result.sessionId });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

sessoinrouter.post("/stop-timer", (req, res) => {
  const { sessionId, rate } = req.body;

  stopTimer(sessionId, rate)
    .then((result) => {
      res.status(200).json({ message: result.message });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

sessoinrouter.get("/timer-status/:sessionId", (req, res) => {
  const { sessionId } = req.params;

  getTimerStatus(sessionId)
    .then((status) => {
      if (status.active) {
        res.status(200).json({
          active: true,
          elapsedTime: status.elapsedTime,
        });
      } else {
        res.status(200).json({ active: false });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
export default sessoinrouter ;
