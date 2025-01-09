import bcrypt from "bcrypt";
import express from "express";
import { adduser, deleteuser } from "../db.mjs";

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

    try {
        // جستجوی کاربر بر اساس نام کاربری
        const query = "SELECT * FROM users WHERE username = $1";
        const result = await pool.query(query, [username]);

        if (result.rows.length === 0) {
            return res.status(401).send({ message: "نام کاربری پیدا نشد" });
        }

        const user = result.rows[0];

        // مقایسه رمز عبور وارد شده با رمز عبور ذخیره شده
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch) {
            return res.status(200).send({ message: "ورود موفقیت‌آمیز" });
        } else {
            return res.status(401).send({ message: "رمز عبور اشتباه است" });
        }
    } catch (error) {
        console.error("خطا در ورود:", error);
        return res.status(500).send({ message: "خطا در سیستم" });
    }
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
