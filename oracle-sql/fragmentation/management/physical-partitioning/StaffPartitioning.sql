CREATE TABLE c##mihai.Staff (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    role VARCHAR2(50),
    department_id NUMBER,
    FOREIGN KEY (department_id) REFERENCES c##mihai.Department(id)
)
PARTITION BY LIST (role)
(
    PARTITION p_doctor VALUES ('Doctor'),
    PARTITION p_nurse VALUES ('Nurse'),
    PARTITION p_others VALUES (DEFAULT)
);
