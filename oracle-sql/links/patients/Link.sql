-- Creating a database link named 'management' to connect to the management database
CREATE DATABASE LINK management
CONNECT TO system IDENTIFIED BY Master2023
USING '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=servermanagement)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=management)))'