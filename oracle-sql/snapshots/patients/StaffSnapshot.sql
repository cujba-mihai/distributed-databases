CREATE SNAPSHOT StaffSnapshot 
REFRESH COMPLETE 
START WITH TO_DATE ('01-JAN-22 00:00:00', 'DD-MON-YY HH24:MI:SS')
NEXT SYSDATE + 7
AS SELECT id, "name", age
FROM c##mihai.Staff@management
WHERE c##mihai.Staff@management.role IS NOT NULL;
