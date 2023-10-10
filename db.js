import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from './config';

export const ManagementDataSource = new DataSource(config.managementDb);

