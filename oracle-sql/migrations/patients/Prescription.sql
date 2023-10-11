CREATE TABLE c##mihai.Prescriptions (
    prescription_id NUMBER PRIMARY KEY,
    medical_record_id NUMBER NOT NULL,
    medicine_name VARCHAR2(50),
    dosage VARCHAR2(20),
    duration_days NUMBER,
    FOREIGN KEY (medical_record_id) REFERENCES c##mihai.MedicalRecord(id)
);
