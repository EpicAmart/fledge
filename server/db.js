const Pool = require("pg").Pool;

const pool = new Pool({
    user: "amartyaranganathan",
    host: "localhost",
    port: 5432,
    database: "fledge"
});

module.exports = pool;