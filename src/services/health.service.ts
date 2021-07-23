import { STS } from 'aws-sdk';

export enum HealthStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export interface HealthReport {
  status: HealthStatus;
  message: string;
}

const getHealth = async (): Promise<HealthReport> => {
  return {
    status: HealthStatus.AVAILABLE,
    message: 'OK',
  };
};

export const healthService = {
  getHealth,
};
