CREATE TABLE todotasks(
  id SERIAL NOT NULL PRIMARY KEY,
  todo_task VARCHAR(256) NOT NULL,
  todo_status TEXT default NULL,
  created_at TIMESTAMP default CURRENT_TIMESTAMP
);

INSERT INTO todotasks(todo_task) values
('Reading'),
('Reading'),
('Reading'),
('Reading'),
('Reading'),
('Reading'),
('Reading'),
('Reading'),
('Reading'),
('Reading'),
('Reading');