use dancedb;

INSERT INTO Roles (name, createdAt, UpdatedAt)
	VALUES ('admin', NOW(), NOW()), 
				 ('student', NOW(), NOW()), 
				 ('teacher', NOW(), NOW()), 
				 ('marketing', NOW(), NOW()),
				 ('customer support', NOW(), NOW());

INSERT INTO Users (firstName, lastName, email, password, isActive, onMarketingList, createdAt, UpdatedAt, RoleId)
	VALUES ('Kurt', 'Statham', 'kurt@kurt.com', 'kurt', 1, 0, NOW(), NOW(), 1),
		     ('Marco', 'DiBiste', 'marco@marco.com', 'marco', 0, 1, NOW(), NOW(), 2),
				 ('John', 'Johnson', 'john@john.com', 'john', 1, 1, NOW(), NOW(), 2),
				 ('Susie', 'Creamcheese', 'susie@susie.com', 'susie', 1, 1, NOW(), NOW(), 2),
				 ('Sally', 'Housecoat', 'sally@sally.com', 'sally', 1, 1, NOW(), NOW(), 2),
				 ('Fred', 'Astaire', 'fred@fred.com', 'fred', 1, 0, NOW(), NOW(), 3),
				 ('Ginger', 'Rogers', 'ginger@ginger.com', 'ginger', 1, 0, NOW(), NOW(), 3),
         ('Lou', 'Cypher', 'lou@lou.com', 'lou', 1, 1, NOW(), NOW(), 4);
           
INSERT INTO Dances (name, quarter, createdAt, UpdatedAt)
	VALUES ('Waltz', 'Smooth', NOW(), NOW()), 
				 ('Foxtrot', 'Smooth', NOW(), NOW()), 
				 ('Tango', 'Smooth', NOW(), NOW()), 
				 ('Viennese Waltz', 'Smooth', NOW(), NOW()), 
				 ('Rhumba', 'Rhythm 1', NOW(), NOW()), 
				 ('Cha Cha', 'Rhythm 1', NOW(), NOW()), 
				 ('East Coast Swing', 'Rhythm 1', NOW(), NOW()), 
				 ('Bolero', 'Rhythm 1', NOW(), NOW()), 
				 ('Merengue', 'Rhythm 2', NOW(), NOW()), 
				 ('Mambo', 'Rhythm 2', NOW(), NOW()), 
				 ('Samba', 'Rhythm 2', NOW(), NOW()), 
				 ('West Coast Swing', 'Rhythm 2', NOW(), NOW()), 
				 ('Nightclub Two Step', 'Nightclub', NOW(), NOW()), 
				 ('Hustle', 'Nightclub', NOW(), NOW()), 
				 ('Salsa', 'Nightclub', NOW(), NOW()), 
				 ('Argentine Tango', 'Nightclub', NOW(), NOW()), 
				 ('Lindy Hop', 'Nightclub', NOW(), NOW()); 

	INSERT INTO Grades (UserId, DanceId, date, score, level, questionType, detail, comment, createdAt, UpdatedAt)
		VALUES(3, 1, '2016-09-30', 3.00, 'Bronze', 'Theory', "Leader's amount of turn, Figure 2", 'Nice footwork, keep chest up', NOW(), NOW()),
					(3, 2, '2016-09-30', 3.25, 'Bronze', 'Theory', "Follower's footwork, Figure 5", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(3, 1, '2016-09-30', 3.00, 'Bronze', 'Amalgamation', "Lead", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(3, 2, '2016-09-30', 3.00, 'Bronze', 'Amalgamation', "Follow", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),

					(3, 3, '2016-10-30', 3.4, 'Bronze', 'Theory', "Leader's amount of turn, Figure 2", 'Nice footwork, keep chest up', NOW(), NOW()),
					(3, 4, '2016-10-30', 3.4, 'Bronze', 'Theory', "Follower's footwork, Figure 5", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(3, 3, '2016-10-30', 3.25, 'Bronze', 'Amalgamation', "Lead", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(3, 4, '2016-10-30', 3.3, 'Bronze', 'Amalgamation', "Follow", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),

					(4, 5, '2016-07-30', 3.5, 'Bronze', 'Theory', "Leader's amount of turn, Figure 2", 'Nice footwork, keep chest up', NOW(), NOW()),
					(4, 6, '2016-07-30', 3.6, 'Bronze', 'Theory', "Follower's footwork, Figure 5", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(4, 5, '2016-07-30', 3.25, 'Bronze', 'Amalgamation', "Lead", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(4, 6, '2016-07-30', 3.25, 'Bronze', 'Amalgamation', "Follow", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					
					(4, 7, '2016-08-30', 3.4, 'Bronze', 'Theory', "Leader's amount of turn, Figure 2", 'Nice footwork, keep chest up', NOW(), NOW()),
					(4, 8, '2016-08-30', 3.5, 'Bronze', 'Theory', "Follower's footwork, Figure 5", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(4, 7, '2016-08-30', 3.3, 'Bronze', 'Amalgamation', "Lead", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(4, 8, '2016-08-30', 3.3, 'Bronze', 'Amalgamation', "Follow", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					
					(5, 9, '2016-05-30', 3.0, 'Bronze', 'Theory', "Leader's amount of turn, Figure 2", 'Nice footwork, keep chest up', NOW(), NOW()),
					(5, 10, '2016-05-30', 3.0, 'Bronze', 'Theory', "Follower's footwork, Figure 5", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(5, 9, '2016-05-30', 3.2, 'Bronze', 'Amalgamation', "Lead", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(5, 10, '2016-05-30', 3.2, 'Bronze', 'Amalgamation', "Follow", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					
					(5, 11, '2016-06-30', 3.25, 'Bronze', 'Theory', "Leader's amount of turn, Figure 2", 'Nice footwork, keep chest up', NOW(), NOW()),
					(5, 12, '2016-06-30', 3.3, 'Bronze', 'Theory', "Follower's footwork, Figure 5", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(5, 11, '2016-06-30', 3.4, 'Bronze', 'Amalgamation', "Lead", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW()),
					(5, 12, '2016-06-30', 3.3, 'Bronze', 'Amalgamation', "Follow", 'Words matched movement nicely, watch amounts of turn', NOW(), NOW());