INSERT INTO c##mihai.Patient_Partitioned (id, name, age, staff_id)
SELECT id, name, age, staff_id FROM c##mihai.Patient;