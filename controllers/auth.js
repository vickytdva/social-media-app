import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) {
      console.error("MySQL error (register - select):", err);
      return res.status(500).json({ message: "Database error. Please try again later." });
    }

    if (data.length) {
      return res.status(409).json({ message: "User already exists!" });
    }

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) {
        console.error("MySQL error (register - insert):", err);
        return res.status(500).json({ message: "Could not create user. Please try again." });
      }

      return res.status(200).json({ message: "User has been created." });
    });
  });
};

// LOGIN
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  console.log("Body:", req.body);

  db.query(q, [req.body.username], (err, data) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      console.log("User not found:", req.body.username);
      return res.status(404).json("User not found!");
    }

    console.log("User found:", data[0]);

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) {
      console.log("Wrong password for:", req.body.username);
      return res.status(400).json("Wrong password or username!");
    }

    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json(others);
  });
};

// LOGOUT
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: false, // HTTPS → true
      sameSite: "lax",
    })
    .status(200)
    .json({ message: "User has been logged out." });
};
