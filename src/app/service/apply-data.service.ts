import { Injectable } from '@angular/core';
import { BehaviorSubject, of, filter, map, Observable, from, tap } from 'rxjs';
import { delay } from 'rxjs/operators';
//
import { ApplyData } from 'app/util/type';
import { RequestStatus } from 'app/util/constants';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, ApplyDataResponse } from './type';

const APPLY_DATA: Array<ApplyData> = [
  {
    id: 1,
    user_id: 2,
    type: 6,
    status: 2,
    amount: 897,
    reason: 'Losartan Potassium',
    createTime: '2021-10-22',
    startTime: '2021-06-21',
    endTime: '2021-04-26',
  },
  {
    id: 2,
    user_id: 2,
    type: 5,
    status: 4,
    amount: 71796,
    reason: 'Panthenol',
    createTime: '2021-07-21',
    startTime: '2021-05-26',
    endTime: '2021-09-11',
  },
  {
    id: 3,
    user_id: 2,
    type: 5,
    status: 1,
    amount: 29962,
    reason:
      'ATP (Adenosine triphosphate disodium), Malic Acid, Natrum oxalaceticum, Oroticum acidum, Riboflavinum, Apiolum, Cinnamic acid, DHEA (Dehydroepiandrosterone),',
    createTime: '2021-02-23',
    startTime: '2021-11-19',
    endTime: '2021-03-26',
  },
  {
    id: 4,
    user_id: 2,
    type: 6,
    status: 2,
    amount: 33149,
    reason: 'cyclobenzaprine hydrochloride',
    createTime: '2021-02-17',
    startTime: '2021-07-14',
    endTime: '2021-09-08',
  },
  {
    id: 5,
    user_id: 2,
    type: 6,
    status: 1,
    amount: 1128,
    reason: 'Carvedilol',
    createTime: '2021-08-21',
    startTime: '2021-11-05',
    endTime: '2021-03-08',
  },
  {
    id: 6,
    user_id: 2,
    type: 6,
    status: 2,
    amount: 43149,
    reason: 'Burweed Marsh Elder',
    createTime: '2021-10-31',
    startTime: '2021-06-13',
    endTime: '2021-11-25',
  },
  {
    id: 7,
    user_id: 2,
    type: 5,
    status: 2,
    amount: 24552,
    reason: 'zinc gluconate',
    createTime: '2021-08-14',
    startTime: '2021-11-30',
    endTime: '2021-04-23',
  },
  {
    id: 8,
    user_id: 2,
    type: 5,
    status: 1,
    amount: 32521,
    reason: 'Anti-Inhibitor Coagulant Complex',
    createTime: '2021-08-28',
    startTime: '2021-04-03',
    endTime: '2021-03-24',
  },
  {
    id: 9,
    user_id: 2,
    type: 5,
    status: 4,
    amount: 57369,
    reason: 'Western Ragweed',
    createTime: '2021-08-16',
    startTime: '2021-07-20',
    endTime: '2021-01-18',
  },
  {
    id: 10,
    user_id: 2,
    type: 5,
    status: 2,
    amount: 57801,
    reason: 'Pyrithione Zinc',
    createTime: '2021-08-08',
    startTime: '2021-03-20',
    endTime: '2021-01-31',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ApplyDataService {
  data: ApplyData[] = [];

  constructor(private http: HttpClient) {}

  getDataById(id: number) {
    if (this.data.length) {
      const targetData = this.data.filter((e) => e.id === id)[0];
      return of(targetData);
    }
    return this.http.get<ApplyDataResponse>(`/expense/api/apply/${id}`).pipe(map((e) => e.data[0]));
    // return of(this.data[0]);
  }

  getAllData(condition: Partial<ApplyData> | null = null) {
    // return this.http.get<ApplyDataResponse>('/expense/api/apply').pipe(
    //   tap((e) => {
    //     this.data = e.data;
    //   })
    // );
    return of({ code: 200, msg: '', data: APPLY_DATA }).pipe(
      delay(300),
      tap((e) => {
        this.data = e.data;
      })
    );
  }

  setStatus({ id, status }: { id: number; status: number }) {
    const target = this.data.find((e) => e.id === id);
    if (target) target.status = status;
    return this.http.patch(`/expense/api/apply/${id}`, { status });
  }

  addData(params: any) {
    // const newApplyData = {
    //   ...params,
    //   status: RequestStatus.Submitted,
    //   id: this.data.length + 1,
    // };
    // this.data.push(newApplyData);
    return this.http.post(`/expense/api/apply`, params);
  }
}
