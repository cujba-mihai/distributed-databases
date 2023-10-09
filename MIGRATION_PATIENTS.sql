CREATE TABLE Patient (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    age NUMBER,
    staff_id NUMBER
);

CREATE TABLE MedicalRecord (
    id NUMBER PRIMARY KEY,
    patient_id NUMBER NOT NULL,
    diagnosis VARCHAR2(200),
    treatment VARCHAR2(200)
);
