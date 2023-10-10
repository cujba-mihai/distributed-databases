-- Trigger to enforce referential integrity for staff_id in Patient table
CREATE OR REPLACE TRIGGER c##mihai.CHECK_STAFF_ID
BEFORE INSERT OR UPDATE ON c##mihai.PATIENT
FOR EACH ROW
DECLARE 
  count_staff NUMBER;
BEGIN
  SELECT COUNT(*)
  INTO count_staff
  FROM SYS.STAFF
  WHERE id = :NEW.staff_id;

  IF count_staff = 0 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Referential integrity violation - the staff_id does not exist in remote Staff table');
  END IF;
END;
/
