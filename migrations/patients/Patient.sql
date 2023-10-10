-- Create a new table named 'Patient' under the schema 'c##mihai'
CREATE TABLE c##mihai.Patient (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    age NUMBER,
    staff_id NUMBER,
    FOREIGN KEY (staff_id) REFERENCES c##mihai.Staff(id)
);
