import express from "express";
import { getUser , updateUser} from "../controllers/user.js";
import { db } from "../connect.js";

const router = express.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)

// List users (id, name, profilePic) for tagging
router.get("/", (req, res) => {
  const q = "SELECT id, name, profilePic FROM users ORDER BY name";
  db.query(q, [], (err, rows) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(rows);
  });
});

export default router