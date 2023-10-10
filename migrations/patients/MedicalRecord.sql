-- Create a new table named 'MedicalRecord' under the schema 'c##mihai'
CREATE TABLE c##mihai.MedicalRecord (
    id NUMBER PRIMARY KEY,
    patient_id NUMBER NOT NULL,
    diagnosis VARCHAR2(200),
    treatment VARCHAR2(200)
);
