CREATE OR REPLACE VIEW staff_patient AS
SELECT s.*, p.name AS patient_name, p.age AS patient_age
FROM Staff s, SYS.PATIENT@patients p
WHERE s.id = p.staff_id;