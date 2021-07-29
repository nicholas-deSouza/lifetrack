CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    TEXT NOT NULL,
    password    TEXT NOT NULL,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    date        TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE sleep (
  id            SERIAL PRIMARY KEY,
  start_time    TIMESTAMP NOT NULL,
  end_time      TIMESTAMP NOT NULL,
  user_id       INTEGER REFERENCES users(id) ON DELETE CASCADE,  
  timestamp     TIMESTAMP DEFAULT NOW()
);

-- add foreign key above?