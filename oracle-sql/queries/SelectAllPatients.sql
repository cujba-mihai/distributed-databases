SELECT
	p.id AS patient_id,
	p.name AS patient_name,
	p.age,
	p.staff_id,
	m.id AS medical_record_id,
	m.diagnosis,
	m.treatment,
	s.id AS staff_id,
	s.name AS staff_name,
	s.department_id,
	d.id AS department_id,
	d.name AS department_name
FROM
	c##mihai.Patient p
LEFT JOIN c##mihai.MedicalRecord m ON
	p.id = m.patient_id
LEFT JOIN c##mihai.STAFF@management s ON
	p.staff_id = s.id
LEFT JOIN c##mihai.DEPARTMENT@management d ON
	s.department_id = d.id