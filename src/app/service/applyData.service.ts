import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
//
import { ApplyData } from 'app/util/type';
import { RequestStatus } from 'app/util/constants';

const APPLY_DATA: Array<ApplyData> = [
  {
    id: 1,
    type: 1,
    status: 4,
    amount: 2701,
    reason: 'Exclusive directional workforce',
    startDate: '7/2/2021',
    endDate: '11/28/2021',
  },
  {
    id: 2,
    type: 0,
    status: 2,
    amount: 4450,
    reason: 'Re-contextualized needs-based extranet',
    startDate: '11/9/2021',
    endDate: '10/22/2021',
  },
  {
    id: 3,
    type: 0,
    status: 2,
    amount: 7098,
    reason: 'Proactive local alliance',
    startDate: '3/29/2021',
    endDate: '6/17/2021',
  },
  {
    id: 4,
    type: 1,
    status: 1,
    amount: 3786,
    reason: 'Public-key coherent implementation',
    startDate: '1/22/2021',
    endDate: '3/3/2021',
  },
  {
    id: 5,
    type: 1,
    status: 3,
    amount: 2995,
    reason: 'Realigned global internet solution',
    startDate: '11/2/2021',
    endDate: '12/22/2020',
  },
  {
    id: 6,
    type: 1,
    status: 1,
    amount: 6530,
    reason: 'Multi-channelled actuating frame',
    startDate: '10/15/2021',
    endDate: '2/11/2021',
  },
  // {
  //   id: 7,
  //   type: 0,
  //   status: 1,
  //   amount: 7588,
  //   reason: 'Phased methodical emulation',
  //   startDate: '1/5/2021',
  //   endDate: '8/21/2021',
  // },
  // {
  //   id: 8,
  //   type: 1,
  //   status: 2,
  //   amount: 8115,
  //   reason: 'User-centric fresh-thinking attitude',
  //   startDate: '10/10/2021',
  //   endDate: '2/7/2021',
  // },
  // {
  //   id: 9,
  //   type: 0,
  //   status: 3,
  //   amount: 4801,
  //   reason: 'Enhanced well-modulated moratorium',
  //   startDate: '10/5/2021',
  //   endDate: '8/2/2021',
  // },
  // {
  //   id: 10,
  //   type: 1,
  //   status: 4,
  //   amount: 7508,
  //   reason: 'Versatile stable internet solution',
  //   startDate: '5/9/2021',
  //   endDate: '2/10/2021',
  // },
];

@Injectable({
  providedIn: 'root',
})
export class ApplyDataService {
  data = APPLY_DATA;

  constructor() {}

  getApplyDataById(id: number) {
    return this.data.filter((e) => e.id === id)[0];
  }

  getAllApplyData() {
    return of(this.data).pipe(delay(500));
  }

  setApplyStatus({ id, status }: { id: number; status: number }) {
    const target = this.data.find((e) => e.id === id);
    if (target) target.status = status;
  }

  addApplyData(params: any) {
    const newApplyData = {
      ...params,
      status: RequestStatus.Submitted,
      id: this.data.length + 1,
    };
    this.data.push(newApplyData);
  }
}
