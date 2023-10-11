CREATE TABLE c##mihai.Appointments (
    appointment_id NUMBER PRIMARY KEY,
    patient_id NUMBER NOT NULL,
    doctor_id NUMBER NOT NULL,
    appointment_date DATE,
    FOREIGN KEY (patient_id) REFERENCES c##mihai.Patient(id),
    FOREIGN KEY (doctor_id) REFERENCES c##mihai.Doctors(doctor_id)
);
