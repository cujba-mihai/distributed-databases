CREATE TABLE c##mihai.MedicalRecord (
    id NUMBER PRIMARY KEY,
    patient_id NUMBER NOT NULL,
    diagnosis VARCHAR2(200),
    treatment VARCHAR2(200),
    FOREIGN KEY (patient_id) REFERENCES c##mihai.Patient(id)
)
PARTITION BY LIST (diagnosis)
(
    PARTITION p_flu VALUES ('Flu'),
    PARTITION p_covid VALUES ('COVID-19'),
    PARTITION p_others VALUES (DEFAULT)
);
