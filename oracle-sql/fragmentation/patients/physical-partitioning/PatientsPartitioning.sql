CREATE TABLE c##mihai.Patient_Partitioned (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    age NUMBER,
    staff_id NUMBER,
    FOREIGN KEY (staff_id) REFERENCES c##mihai.Local_Staff(id)
)
PARTITION BY RANGE (age) (
    PARTITION Patient_Young VALUES LESS THAN (30),
    PARTITION Patient_MiddleAged VALUES LESS THAN (60),
    PARTITION Patient_Senior VALUES LESS THAN (MAXVALUE)
);