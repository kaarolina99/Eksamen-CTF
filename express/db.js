const Pool = require("pg");

const pool = new Pool({
  user: "karolinapawlicka",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "eksamen",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
