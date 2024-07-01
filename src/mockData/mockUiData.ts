// src/mockUiData/viewApplicationData.ts
import { Application } from './applicationModel'

export const mockData: Application[] = [
  {
    applicationId: '123456',
    agentDetails: {
      agentId: 'A001',
      agentName: 'Alice',
    },
    clients: [
      {
        clientId: '849543',
        firstName: 'Barry',
        lastName: 'Brownley',
        dateOfBirth: '1980-10-10',
        sex: 'Male',
        smokerStatus: 'Non-smoker',
        policyInformation: [
          {
            policyNumber: '12345678',
            planType: 'Personal',
            coverType: 'LIFE',
            policyStatus: 'Application',
            policyAuxStatus: 0,
            coverAmount: 100000,
            monthlyPremium: 100,
            onRiskDate: '2024-02-21',
            summary: 'Life insurance policy for Barry Brownley',
            expiresIn: '2044-02-21',
            engagementNo: '2000000002',
          },
        ],
      },
    ],
  },
  {
    applicationId: '789012',
    agentDetails: {
      agentId: 'A002',
      agentName: 'Stuart',
    },
    clients: [
      {
        clientId: 'C002',
        firstName: 'Alice',
        lastName: 'Smith',
        dateOfBirth: '1975-08-15',
        sex: 'Female',
        smokerStatus: 'Smoker',
        policyInformation: [
          {
            policyNumber: '87654321',
            planType: 'Family',
            coverType: 'CRITICAL ILLNESS',
            policyStatus: 'Active',
            policyAuxStatus: 1,
            coverAmount: 100000,
            monthlyPremium: 100,
            onRiskDate: '2023-03-15',
            summary: 'Critical illness policy for Alice Smith',
            expiresIn: '2043-03-15',
            engagementNo: '2000000003',
          },
        ],
      },
    ],
  },
];

export const fetchApplicationData = (id: string): Promise<Application | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const application = mockData.find((app) => app.applicationId === id);
      resolve(application);
    }, 1000); // Simulate network delay
  });
};
