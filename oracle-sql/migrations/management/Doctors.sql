-- Create a new table named 'Doctors' under the schema 'c##mihai'
CREATE TABLE c##mihai.Doctors (
    doctor_id NUMBER PRIMARY KEY,
    specialty VARCHAR2(50),
    years_of_experience NUMBER,
    staff_id NUMBER,
    FOREIGN KEY (staff_id) REFERENCES c##mihai.Staff(id)
);
