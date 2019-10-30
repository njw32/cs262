Nate Walter	njw32	10/25


'
\include /home/njw32/cs262/monopoly.sql
'

8.1


SELECT * FROM Game ORDER BY time DESC;

SELECT * FROM Game WHERE time > now() - interval '1 week';

SELECT * FROM PlayerGame WHERE gameID IS NOT NULL;

SELECT playerID FROM PlayerGame WHERE score > 2000;

SELECT * FROM Player WHERE emailAddress LIKE '%gmail%';

8.2

SELECT score FROM Player, PlayerGame WHERE Player.ID = PlayerGame.playerID AND player.name = 'The King';


SELECT Player.name, PlayerGame.score FROM Player, Game, PlayerGame WHERE Game.time = '2006-06-28 13:20:00' AND Player.ID = PlayerGame.playerID AND PlayerGame.gameID = Game.ID ORDER BY PlayerGame.score DESC LIMIT 1; 


'c) The P1.ID < P2.ID clause compares the two IDs in order to make sure they are not comparing the same player against itself. P2 will logically follow P1 and thus will return true unless it
is the same players ID.
 d) You may want to join a table to itself when comparing rows to each other. In our app this could be useful to compare and contrast recipes or maybe ingredients in order to not have
duplicates.'
