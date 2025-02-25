const createModel = async (pgConnection) => {
    let query = `CREATE TABLE games (
  id BIGSERIAL PRIMARY KEY,
  game_mode VARCHAR(255) NOT NULL,
  game_sub_mode VARCHAR(255) NOT NULL,
  game_id VARCHAR(255) UNIQUE NOT NULL,
  time_limit INTEGER DEFAULT 30,
  rounds INTEGER DEFAULT 5,
  fields TEXT[] DEFAULT ARRAY['NAME', 'PLACE', 'ANIMAL', 'THING']::TEXT[],
  participants TEXT[],
  created_by VARCHAR(50),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;


    pgConnection.query(query, (err, res) => {
        if (err) {
            if (err.code === "42P04" || err.code === "42P07") { } else console.log(err.message);
            return;
        }
        console.log("game table creation successful");
    });
};

module.exports = createModel;
