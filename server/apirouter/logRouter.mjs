import express from "express";
import { addTableLog } from "../db.mjs";

const logRouter = express.Router();

logRouter.post("/table/", (req, res) => {
    addTableLog(req.body)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});

export default logRouter;
