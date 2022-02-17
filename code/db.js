const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'express1_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })

  module.exports = pool