SELECT 'Young' as AgeGroup, COUNT(*) FROM c##mihai.Patient_Partitioned WHERE age < 30
UNION ALL
SELECT 'MiddleAged' as AgeGroup, COUNT(*) FROM c##mihai.Patient_Partitioned WHERE age BETWEEN 30 AND 59
UNION ALL
SELECT 'Senior' as AgeGroup, COUNT(*) FROM c##mihai.Patient_Partitioned WHERE age >= 60;