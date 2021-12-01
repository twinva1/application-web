export enum RequestStatus {
  All = 0,
  Submitted = 1,
  Rejected = 2,
  Approved = 3,
}

export const expenseOption = [
  { viewValue: 'All', value: 'all' },
  { viewValue: 'Traveling', value: 'traveling' },
  { viewValue: 'Group meal', value: 'group_meal' },
];

export const requestStatusOption = [
  { viewValue: 'All', value: RequestStatus.All },
  { viewValue: 'Submitted', value: RequestStatus.Submitted },
  { viewValue: 'Rejected', value: RequestStatus.Rejected },
  { viewValue: 'Approved', value: RequestStatus.Approved },
]

