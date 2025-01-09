import bcrypt from "bcrypt";
import express from "express";
import { adduser, deleteuser } from "../db.mjs";
import sqlite from "sqlite3";
import jsonwebtoken from "jsonwebtoken";

var db = new sqlite.Database("./biliards.db", function (err) {
    if (err) console.log(err);
    console.log("Connecting to the database successfully!");
});

const userRouter = express.Router();

// ثبت کاربر جدید
userRouter.post("/", async (req, res) => {
    const { username, password } = req.body;

    try {
        // هش کردن رمز عبور
        const hashedPassword = await bcrypt.hash(password, 10);

        // ذخیره در دیتابیس
        const query = "INSERT INTO users (username, password) VALUES ($1, $2)";
        await pool.query(query, [username, hashedPassword]);

        res.status(200).send({ status: "کاربر با موفقیت اضافه شد." });
    } catch (error) {
        console.error("خطا در ثبت کاربر:", error);
        res.status(500).send({ error: "خطا در سیستم" });
    }
});

// ورود کاربر
userRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // جستجوی کاربر بر اساس نام کاربری
    const query = "SELECT * FROM user WHERE username = ?";
    db.get(query, [username], async (err, row) => {
        if (err) {
            return res.status(401).send({ message: "نام کاربری پیدا نشد" });
        } else if (row === undefined) {
            return res.status(401).send({ message: "نام کاربری پیدا نشد" });
        } else {
            if (password == row.password) {
                return res.status(200).send({ message: "ورود موفقیت‌آمیز" });
            } else {
                return res.status(401).send({ message: "رمز عبور اشتباه است" });
            }
        }
    });
});

// حذف کاربر
userRouter.delete("/:id", async (req, res) => {
    const userId = req.params.id;

    try {
        const query = "DELETE FROM users WHERE id = $1";
        await pool.query(query, [userId]);

        res.status(200).send({ status: "کاربر حذف شد." });
    } catch (error) {
        console.error("خطا در حذف کاربر:", error);
        res.status(500).send({ error: "خطا در سیستم" });
    }
});

export default userRouter;
