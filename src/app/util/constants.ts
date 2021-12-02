export enum RequestStatus {
  All,
  Submitted,
  Rejected,
  Approved,
  Canceled,
}

export enum ExpenseType {
  'Traveling',
  'Group Meal',
}

export enum UserRole {
  NormalUser,
  Admin,
}

export const RequestBadgeStatus = {
  [RequestStatus.Submitted.toString()]: 'processing',
  [RequestStatus.Rejected.toString()]: 'error',
  [RequestStatus.Approved.toString()]: 'success',
  [RequestStatus.Canceled.toString()]: 'default',
};

export const expenseOption = [
  { viewValue: 'All', value: 'all' },
  { viewValue: 'Traveling', value: ExpenseType.Traveling },
  { viewValue: 'Group Meal', value: ExpenseType['Group Meal'] },
];

export const requestStatusOption = [
  { viewValue: 'All', value: RequestStatus.All },
  { viewValue: 'Submitted', value: RequestStatus.Submitted },
  { viewValue: 'Rejected', value: RequestStatus.Rejected },
  { viewValue: 'Approved', value: RequestStatus.Approved },
];
