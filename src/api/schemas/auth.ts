export interface LoginData {
  languageType: number;
  isWeekPassword: number;
  name: string;
  password: string;
  timestamp: number;
}

export interface CredentialData {
  loginName: string;
  password: string;
  timestamp: number;
}