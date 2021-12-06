export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export type LoginResponse = ApiResponse<{ name: string; role_id: number }>;
