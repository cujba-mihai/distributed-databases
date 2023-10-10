-- Trigger to enforce referential integrity for staff_id in Patient table
CREATE OR REPLACE TRIGGER C##MIHAI.CHECK_STAFF_ID
BEFORE INSERT OR UPDATE ON C##MIHAI.PATIENT
FOR EACH ROW
DECLARE 
  count_staff NUMBER;
BEGIN
  SELECT COUNT(*)
  INTO count_staff
  FROM C##MIHAI.STAFF@management
  WHERE id = :NEW.staff_id;

  IF count_staff = 0 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Referential integrity violation - the staff_id does not exist in Staff table');
  END IF;
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    RAISE_APPLICATION_ERROR(-20002, 'No data found in Staff table');
  WHEN TOO_MANY_ROWS THEN
    RAISE_APPLICATION_ERROR(-20003, 'More than one row with the same staff_id found');
END;
/