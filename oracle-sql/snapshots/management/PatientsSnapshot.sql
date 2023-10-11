CREATE SNAPSHOT PatientsSnapshot 
REFRESH COMPLETE 
START WITH TO_DATE ('01-JAN-22 00:00:00', 'DD-MON-YY HH24:MI:SS')
NEXT SYSDATE + 7
AS SELECT id, "name", age 
FROM c##mihai.PATIENT@patients
WHERE c##mihai.PATIENT@patients.name IS NOT NULL;