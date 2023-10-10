CREATE MATERIALIZED VIEW StaffView
REFRESH FAST
START WITH SYSDATE
NEXT SYSDATE + 1/24
AS SELECT * FROM c##mihai.PATIENT@patients;