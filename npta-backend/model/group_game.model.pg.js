const createModel = async (pgConnection) => {
    let query = `CREATE TABLE group_game (
  id BIGSERIAL PRIMARY KEY,
  player_id  VARCHAR(255) NOT NULL,
  game_id VARCHAR(255) UNIQUE NOT NULL,
  answers JSONB DEFAULT '{}' :: jsonb,
  total_score INTEGER DEFAULT 0,
  player_status VARCHAR(10),
  analyzing_answers JSONB DEFAULT '{}' :: jsonb,
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP
  );`;


    pgConnection.query(query, (err, res) => {
        if (err) {
            if (err.code === "42P04" || err.code === "42P07") { } else console.log(err.message);
            return;
        }
        console.log("group-game table creation successful");
    });
};

module.exports = createModel;
