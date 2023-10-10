-- Create a new table named 'Staff' under the schema 'c##mihai'
CREATE TABLE c##mihai.Staff (
    id NUMBER PRIMARY KEY,         
    name VARCHAR2(50) NOT NULL,     
    role VARCHAR2(50),              
    department_id NUMBER,           
    FOREIGN KEY (department_id) REFERENCES Department(id)  
);
