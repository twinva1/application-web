export type UserType = {
  id: number;
  name: string;
  role_id: number;
};

export type ApplyData = {
  id: number;
  userId: number;
  type: number;
  status: number;
  reason: string;
  amount: number;
  createTime: string;
  startTime: string;
  endTime: string;
};

export type ApplyTableData = Omit<ApplyData, 'type'> & {
  statusBadge: string;
  statusDisplayName: string;
  type: string;
};

export type ApplyViewData = {
  id: number;
  userId: number;
  type: string;
  status: string;
  reason: string;
  amount: number;
  createTime: string;
  startTime: string;
  endTime: string;
};
