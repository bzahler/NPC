CREATE TABLE TEST (
    id NUMBER(25) PRIMARY KEY, 
    field1 VARCHAR2(10),
    field2 VARCHAR2(10)
);
DROP TABLE test;

INSERT INTO test VALUES (1, 'Hello', 'Jake');
SELECT * FROM test;
SELECT field1, field2 FROM test WHERE field1 = 'Hello' AND field2 = 'Jake';
