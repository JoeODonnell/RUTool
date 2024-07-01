// src/applicationModel.ts
export interface PolicyInformation {
    applicationId?: string;
    policyNumber: string;
    planType: string;
    coverType: string;
    policyStatus: string;
    policyAuxStatus: number;
    coverAmount: number;
    monthlyPremium: number;
    onRiskDate: string;
    summary: string;
    expiresIn: string;
    engagementNo: string;
  }
  
  export interface Client {
    clientId: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth: string;
    sex: string;
    smokerStatus: string;
    policyInformation: PolicyInformation[];
  }
  
  export interface AgentDetails {
    agentId: string;
    agentName: string;
  }
  
  export interface Application {
    applicationId?: string;
    agentDetails: AgentDetails;
    clients: Client[];
  }
  