DROP TABLE npc;
CREATE SEQUENCE npc_sequence START WITH 1 INCREMENT BY 1;
CREATE TABLE npc (
    npc_id NUMBER(10) PRIMARY KEY,
    name VARCHAR2(50),
    campaign VARCHAR2(50),
    race VARCHAR2(25),
    occupation VARCHAR2(50),
    country VARCHAR2(50),
    town VARCHAR2(50),
    physical_desc VARCHAR2(200),
    voice_desc VARCHAR2(200),
    personality_desc VARCHAR2(200),
    organization VARCHAR2(50),
    comments VARCHAR2(500)
);
INSERT INTO npc VALUES(0, 'firstName', 'firstCampaign', 'firstRace', 'firstJob', 'firstCountry', 'firstTown', 'firstPhysDesc', 'firstVoiceDesc', 'firstPersDesc', 'firstOrg', 'firstComments');
SELECT * FROM npc;

CREATE TABLE npcFriend(
    friendId NUMBER(25) PRIMARY KEY,
    npcId NUMBER(25),
    name VARCHAR2(10),
    whyTheyAreFriends VARCHAR2(10)
);

INSERT INTO npcConnections VALUES (1, 'Arias', 'Gedron');
INSERT INTO npcConnections VALUES (2, 'Jodariel', 'Gedron');
INSERT INTO npc VALUES (2, '4', '100', 'M');

SELECT * FROM npc;
SELECT * FROM npcConnections;

SELECT 
    *
FROM npc
LEFT JOIN npcFriend ON npc.id = npcFriend.npcId
;

--Primary Key: Cannot contain duplicates, cannot be NULL.
/*
    Relations:
        One-to-One
        One-to-Many
        Many-to-One
        Many-to-Many
*/