CREATE TABLE excuses(
    id serial primary key,
    text VARCHAR(256) not null
);

INSERT INTO excuses (text) VALUES
    ('I was sleeping'),
    ('I forgot'),
    ('I missed the bus'),
    ('I fell asleep');