export interface AuthTokenPayload {
  osVersion: string;
  deviceId: string;
  dateToday: string;
}

export interface BaseResponse {
  status: number;
  error: ErrorInfo[];
}

export interface ErrorInfo {
  message: string;
  code: string;
}

export interface AuthResponse extends BaseResponse {
  token: string;
  applicationId: string;
}
