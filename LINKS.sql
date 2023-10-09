CREATE DATABASE LINK management 
CONNECT TO master IDENTIFIED BY Master2023
USING '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=7090))
(CONNECT_DATA=(SERVICE_NAME=management)))';

CREATE DATABASE LINK patients 
CONNECT TO master IDENTIFIED BY Master2023
USING '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=patients)(PORT=7091))(CONNECT_DATA=(SERVICE_NAME=patients)))';


SELECT * FROM Staff@management;
