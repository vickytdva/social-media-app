import mysql from "mysql2";

export const db = mysql.createConnection({
  host:"localhost",
  user:"viktoriat",
  password:"zdravei123",
  database:"socialmedia"
});