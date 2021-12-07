export type UserType = {
  id: number;
  name: string;
  role_id: number;
};

export type ApplyData = {
  id: number;
  user_id: number;
  type: number;
  status: number;
  reason: string;
  amount: number;
  createTime: string;
  startTime: string;
  endTime: string;
};


export type ApplyViewData = {
  id: number;
  user_id: number;
  type: string;
  status: string;
  reason: string;
  amount: number;
  createTime: string;
  startTime: string;
  endTime: string;
};