-- This will create a link named remote_patients from servermanagement to serverpatients.
CREATE DATABASE LINK remote_patients
CONNECT TO system IDENTIFIED BY Master2023
USING '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=8091))(CONNECT_DATA=(SID=patients)))';
