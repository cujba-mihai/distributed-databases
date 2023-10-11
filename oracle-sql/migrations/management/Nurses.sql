CREATE TABLE c##mihai.Nurses (
    nurse_id NUMBER PRIMARY KEY,
    staff_id NUMBER,
    shift VARCHAR2(20),
    FOREIGN KEY (staff_id) REFERENCES c##mihai.Staff(id)
);
