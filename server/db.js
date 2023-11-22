const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Ripstick!",
    host: "localhost",
    port: 5432,
    database: "todoreact"
});

module.exports = pool;