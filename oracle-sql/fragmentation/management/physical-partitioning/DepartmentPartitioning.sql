CREATE TABLE c##mihai.Department_Partitioned (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(50) NOT NULL,
    budget NUMBER
)
PARTITION BY RANGE (budget) (
    PARTITION Dept_LowBudget VALUES LESS THAN (10000),
    PARTITION Dept_MediumBudget VALUES LESS THAN (50000),
    PARTITION Dept_HighBudget VALUES LESS THAN (MAXVALUE)
);
