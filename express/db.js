const { Pool } = require("pg");

const pool = new Pool({
  user: "karolinapawlicka",
  password: "postgres",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "ctftest",
}).promise();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
