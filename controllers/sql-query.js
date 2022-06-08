const connection = require("../db/connect");

const sqlQuery = async (req, res) => {
  const { q } = req.query;

  await connection.query(q, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

module.exports = sqlQuery;
