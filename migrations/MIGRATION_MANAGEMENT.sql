CREATE TABLE Department (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    budget NUMBER
);


CREATE TABLE Staff (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    role VARCHAR2(50),
    department_id NUMBER,
    FOREIGN KEY (department_id) REFERENCES Department(id)
);
