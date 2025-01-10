import express from "express";
import sqlite from "sqlite3";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

var db = new sqlite.Database("./biliards.db", function (err) {
    if (err) console.log(err);
    console.log("Connecting to the database successfully!");
});

const userRouter = express.Router();

// ورود کاربر
userRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM user WHERE username = ?";
    db.get(query, [username], async (err, row) => {
        if (err) {
            return res.status(401).send({ message: "نام کاربری پیدا نشد" });
        } else if (row === undefined) {
            return res.status(404).send({ message: "نام کاربری پیدا نشد" });
        } else {
            if (password == row.password) {
                const token = jwt.sign(
                    { username: row.username },
                    process.env.COOKIE_PRIVATE_KEY,
                    { expiresIn: "1d" }
                );
                res.cookie("token", token);
                return res.status(200).send({ message: "ورود موفقیت‌آمیز" });
            } else {
                return res.status(402).send({ message: "رمز عبور اشتباه است" });
            }
        }
    });
});

// چک کردن یوزر جاری
userRouter.get("/login/current", (req, res) => {
    const authorizedUser = (token) => {
        return new Promise((resolve, reject) => {
            if (!token) {
                resolve("Unauthorized User!");
            }
            jwt.verify(
                token,
                process.env.COOKIE_PRIVATE_KEY,
                (err, decoded) => {
                    if (err) reject(err);
                    resolve({ username: decoded.username });
                }
            );
        });
    };
    authorizedUser(req.cookies.token)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// خروج کاربر
userRouter.delete("/login/current", (req, res) => {
    res.clearCookie("token");
    res.json("cookie cleared!");
});

export default userRouter;
