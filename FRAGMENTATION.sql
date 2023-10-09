-- Assuming that department_id is a unique identifier for Department
SELECT create_distributed_table('Department', 'department_id');

-- Assuming that staff_id is a unique identifier for Staff and department_id is the foreign key
SELECT create_distributed_table('Staff', 'department_id');

-- Assuming that medical_record_id is a unique identifier for MedicalRecord and patient_id is the foreign key
SELECT create_distributed_table('MedicalRecord', 'patient_id');

-- Assuming that patient_id is a unique identifier for Patient and staff_id is the foreign key
SELECT create_distributed_table('Patient', 'staff_id');
