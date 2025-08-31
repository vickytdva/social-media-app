import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

// GET posts
export const getPosts = (req, res) => {
  const userId = req.query.userId;

  let q;
  let values = [];

  if (userId) {
    // Ако е профил – постове само на този user
    q = `SELECT p.*, u.id AS userId, u.name, u.profilePic
         FROM posts AS p 
         JOIN users AS u ON (u.id = p.userId) 
         WHERE p.userId = ? 
         ORDER BY p.createdAt DESC`;
    values = [userId];
  } else {
    // Ако е начална – всички постове
    q = `SELECT p.*, u.id AS userId, u.name, u.profilePic
         FROM posts AS p 
         JOIN users AS u ON (u.id = p.userId) 
         ORDER BY p.createdAt DESC`;
  }

  db.query(q, values, (err, posts) => {
    if (err) return res.status(500).json(err);

    if (!posts.length) return res.status(200).json([]);

    const postIds = posts.map((p) => p.id);
    const tagQuery = `SELECT pt.postId, u.id as userId, u.name
                      FROM post_tags pt
                      JOIN users u ON u.id = pt.taggedUserId
                      WHERE pt.postId IN (?)`;

    db.query(tagQuery, [postIds], (tagErr, tagRows) => {
      if (tagErr) {
        // Ако няма таблица post_tags, просто върни без тагове
        return res.status(200).json(posts.map((p) => ({ ...p, tags: [] })));
      }

      const postIdToTags = new Map();
      for (const row of tagRows) {
        if (!postIdToTags.has(row.postId)) postIdToTags.set(row.postId, []);
        postIdToTags.get(row.postId).push({ userId: row.userId, name: row.name });
      }

      const withTags = posts.map((p) => ({ ...p, tags: postIdToTags.get(p.id) || [] }));
      return res.status(200).json(withTags);
    });
  });
};

// ADD post
export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`desc`, `img`, `location`, `createdAt`, `userId`) VALUES (?)";

    const values = [
      req.body.desc,
      req.body.img,
      req.body.location || null,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, [values], (err, result) => {
      if (err) return res.status(500).json(err);

      const postId = result.insertId;
      const tags = Array.isArray(req.body.tags) ? req.body.tags : [];
      if (!tags.length) return res.status(200).json("Post has been created.");

      const tagValues = tags.map((taggedUserId) => [postId, taggedUserId]);
      const tagInsert = "INSERT INTO post_tags(`postId`, `taggedUserId`) VALUES ?";

      db.query(tagInsert, [tagValues], (tagErr) => {
        if (tagErr) {
          // Ако няма таблица post_tags, все пак върни success за поста
          return res.status(200).json("Post created (tags skipped). ");
        }
        return res.status(200).json("Post has been created.");
      });
    });
  });
};

// DELETE post
export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM posts WHERE `id` = ? AND `userId` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) {
        return res.status(200).json("Post has been deleted.");
      }
      return res.status(403).json("You can delete only your post!");
    });
  });
};
