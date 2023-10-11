CREATE TABLE c##mihai.Equipment (
    equipment_id NUMBER PRIMARY KEY,
    department_id NUMBER,
    name VARCHAR2(50),
    status VARCHAR2(20),
    FOREIGN KEY (department_id) REFERENCES c##mihai.Department(id)
);
