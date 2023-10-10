-- Creating another database link named 'patients' to connect to the patients database
CREATE DATABASE LINK patients
CONNECT TO system IDENTIFIED BY Master2023
USING '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=serverpatients)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=patients)))'
