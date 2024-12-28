import express from "express";
const userRouter = express.Router();
import { adduser, deleteuser } from "../db.mjs";

userRouter.post("/", (req, res) => {
    adduser(req.body)
        .then((result) => {
            res.status(200).send({ status: "Data added to database" });
        })
        .catch((err) => {
            res.status(500).send({ error: err.message });
        });
});

userRouter.delete("/:id", (req, res) => {
    deleteuser(req.params.id)
        .then((result) => {
            res.status(200).send({ status: "user delete" });
        })
        .catch((err) => {
            err.status(500).send({ err: error });
        });
});

export default userRouter;
