const createModel = async (pgConnection) => {
    let query = `CREATE TABLE players (
  id BIGSERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  player_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_viewed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

        CREATE OR REPLACE FUNCTION update_timestamp()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.last_viewed = NOW();
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;

        DROP TRIGGER IF EXISTS update_timestamp ON players;

        CREATE TRIGGER update_timestamp
        BEFORE UPDATE ON players
        FOR EACH ROW
        EXECUTE FUNCTION update_timestamp();
        `;
// from 2 to 9 describes the coloumns of the table
// from 11 to 24 describes the trigger function for last_viewed column
    pgConnection.query(query, (err, res) => {
        if (err) {
            if (err.code === "42P04" || err.code === "42P07") { } else console.log(err.message);
            return;
        }
        console.log("players creation successful");
    });
};

module.exports = createModel;
