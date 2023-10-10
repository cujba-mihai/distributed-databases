SELECT table_name, partition_name, high_value
FROM user_tab_partitions
WHERE table_name = 'DEPARTMENT_PARTITIONED';
