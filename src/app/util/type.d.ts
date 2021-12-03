export type UserType = {
  id: number;
  name: string;
  role_id: number;
};

export type ApplyData = {
  id: number;
  type: number;
  status: number;
  reason: string;
  amount: number;
  createDate: string;
  startDate: string;
  endDate: string;
};


export type ApplyViewData = {
  id: number;
  type: string;
  status: string;
  reason: string;
  amount: number;
  createDate: string;
  startDate: string;
  endDate: string;
};