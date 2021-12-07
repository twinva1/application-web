export enum RequestStatus {
  Submitted = 1,
  Rejected = 2,
  Approved = 3,
  Canceled = 4,
}

export enum ExpenseType {
  Traveling = 5,
  'Group Meal' = 6,
}

export enum UserRole {
  Admin = 1,
  NormalUser = 2,
}

export const RequestBadgeStatus = {
  [RequestStatus.Submitted.toString()]: 'processing',
  [RequestStatus.Rejected.toString()]: 'error',
  [RequestStatus.Approved.toString()]: 'success',
  [RequestStatus.Canceled.toString()]: 'default',
};

export const expenseOption = [
  { viewValue: 'All', value: '' },
  { viewValue: 'Traveling', value: ExpenseType.Traveling },
  { viewValue: 'Group Meal', value: ExpenseType['Group Meal'] },
];

export const requestStatusOption = [
  { viewValue: 'All', value: '' },
  { viewValue: 'Submitted', value: RequestStatus.Submitted },
  { viewValue: 'Rejected', value: RequestStatus.Rejected },
  { viewValue: 'Approved', value: RequestStatus.Approved },
  { viewValue: 'Canceled', value: RequestStatus.Canceled },
];
