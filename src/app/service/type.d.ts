export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export type LoginResponse = ApiResponse<{ id: number; account: string; name: string; role_id: number }>;
