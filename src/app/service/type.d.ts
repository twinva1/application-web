import { ApplyData } from 'app/util/type';

export interface ApiResponse<T = null> {
  code: number;
  message: string;
  data: T;
}

export type LoginResponse = ApiResponse<{
  id: number;
  account: string;
  name: string;
  role_id: number;
}>;

export type ApplyDataResponse = ApiResponse<{
  totalElements: number;
  totalPages: number;
  expenses: ApplyData[];
}>;

export type ApplyDataQueryCondition = {
  type: number;
  status: number;
  startTime: number;
  endTime: number;
  page: number;
  pageSize: number;
  userId: number;
};
