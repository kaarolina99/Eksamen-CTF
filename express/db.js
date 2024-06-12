const { Pool } = require("pg");

const pool = new Pool({
  user: "karolinapawlicka",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "eksamen",
});

const query = (text, params) => pool.query(text, params);

async function test(bevis, flag) {
  try {
    const result = await pool.query(
      "SELECT * FROM password WHERE bevis = $1 AND key = $2",
      [bevis, flag]
    );
    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

module.exports = { query, test };
