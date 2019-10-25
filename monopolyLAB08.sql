--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.

DROP TABLE IF EXISTS PlayerProperty CASCADE;
DROP TABLE IF EXISTS PlayerGame CASCADE;
DROP TABLE IF EXISTS Property CASCADE;
DROP TABLE IF EXISTS Game CASCADE;
DROP TABLE IF EXISTS Player CASCADE;


-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp,
	active integer
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY,
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE Property (
	name varchar(50) PRIMARY KEY
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	currentLocation varchar REFERENCES Property(name)
	);

CREATE TABLE PlayerProperty (
	playerID integer REFERENCES Player(ID),	
	gameID integer REFERENCES Game(ID),
	property varchar REFERENCES Property(name),
	houses integer,	
	hotels integer
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PlayerProperty TO PUBLIC;
-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00', 0);
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00', 1);
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00', 1);
INSERT INTO Game VALUES (4, '2019-10-22 18:41:00', 0);

INSERT INTO Player VALUES (1, 'me@calvin.edu', 'The unnamed one');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');


INSERT INTO Property VALUES ('Illinois Avenue');
INSERT INTO Property VALUES ('Michigan Avenue');
INSERT INTO Property VALUES ('St. James Place');
INSERT INTO Property VALUES ('Park Place');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, 1000, 'Illinois Avenue');
INSERT INTO PlayerGame VALUES (1, 2, 0.00, -10000, 'Michigan Avenue');
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 7811, 'Michigan Avenue');
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 190, 'Park Place');
INSERT INTO PlayerGame VALUES (2, 2, 0.00, 0, 'St. James Place');
INSERT INTO PlayerGame VALUES (2, 3, 500.00, 898, 'Illinois Avenue');
INSERT INTO PlayerGame VALUES (3, 2, 0.00, 19191, 'Park Place');
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 9090, 'St. James Place');


INSERT INTO PlayerProperty VALUES (2, 1, 'Illinois Avenue', 2, 0);
INSERT INTO PlayerProperty VALUES (2, 1, 'Michigan Avenue', 0, 0);
INSERT INTO PlayerProperty VALUES (1, 2, 'Illinois Avenue', 1, 1);
INSERT INTO PlayerProperty VALUES (3, 2, 'St. James Place', 0, 0);
INSERT INTO PlayerProperty VALUES (3, 3, 'Park Place', 3, 1);
