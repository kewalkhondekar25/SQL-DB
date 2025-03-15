import { Pool } from "pg"

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "mysecretpassword",
  port: 5432
});

const fetchUsers = async (userId: number) => {
  //prevents sql injection
  const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [userId]);
  // const { rows } = await pool.query(`SELECT * FROM users WHERE username ILIKE $1`, [userId]);
  console.log(rows);
};

fetchUsers(12);

