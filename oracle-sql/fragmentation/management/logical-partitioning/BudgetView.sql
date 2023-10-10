CREATE VIEW DeptBudgetView AS
SELECT * FROM c##mihai.Department
WHERE budget < 10000
UNION ALL
SELECT * FROM c##mihai.Department
WHERE budget >= 10000;
