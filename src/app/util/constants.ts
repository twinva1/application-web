export enum RequestStatus {
  Submitted,
  Rejected,
  Approved,
  Canceled,
}

export enum ExpenseType {
  Traveling,
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
