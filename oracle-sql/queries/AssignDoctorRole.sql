UPDATE c##mihai.Staff
SET role = 'Doctor'
WHERE ROWID IN (
SELECT ROWID
FROM (
  SELECT ROWID, ROW_NUMBER() OVER (ORDER BY id) AS rn
  FROM c##mihai.Staff
)
WHERE rn <= 20
);
