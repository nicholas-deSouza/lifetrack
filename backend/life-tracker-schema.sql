CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    TEXT NOT NULL,
    password    TEXT NOT NULL,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
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