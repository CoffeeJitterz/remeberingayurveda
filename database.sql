-- CREATE DATABASE remembering_ayurveda

CREATE TABLE events(
    event_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    date VARCHAR(255),
    description TEXT,
    image VARCHAR(255)
);
CREATE TABLE blogs(
    blog_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    date VARCHAR(255),
    body TEXT,
    image VARCHAR(255)
);