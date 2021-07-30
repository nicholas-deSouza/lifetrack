CREATE TABLE users (
   id          SERIAL PRIMARY KEY,
   password    TEXT NOT NULL,
   first_name  TEXT,
   last_name   TEXT,
   email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
   is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
   date        TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercises (
  id        SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT,
  duration    INTEGER,
  intensity   INTEGER,
  user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE, 
  timestamp  TIMESTAMP DEFAULT NOW()
);


-- add foreign key above?