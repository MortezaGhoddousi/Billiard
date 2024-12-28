import express from "express";
import { verifyUser } from "../db.mjs";
const routerverfy = express.Router();

routerverfy.post("/login", (req, res) => {
  const username = req.body.username; //
  if (username === "testuser") {
    const token = jwt.sign({ username }, "WA02", { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

routerverfy.get("/cms", verifyUser, (req, res) => {
  res.render("cms");
});

export default routerverfy;
