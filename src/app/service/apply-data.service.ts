import { Injectable } from '@angular/core';
import { BehaviorSubject, of, filter, map, Observable, from, tap } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
//
import { ApplyData } from 'app/util/type';
import { RequestStatus } from 'app/util/constants';
import { AccountService } from 'app/service';
import { ApiResponse, ApplyDataResponse, ApplyDataQueryCondition } from './type';

const APPLY_DATA: Array<ApplyData> = [
  {
    id: 1,
    userId: 2,
    type: 5,
    status: 3,
    amount: 97570,
    reason:
      'Aloe, Carbo veg., Causticum,Chelidonium majus, Cholesterinum, Cinchona, Colchicum, Cyclamen, Gelsemium, Kali carb., Merc. viv.,Phosphorus, hysostigma, Prunus spin., Senega officinalis, Sepia, Sulphur, Tabacum, Euphrasia',
    createTime: '2021-04-12',
    startTime: '2021-08-02',
    endTime: '2021-01-24',
  },
  {
    id: 2,
    userId: 2,
    type: 6,
    status: 1,
    amount: 25312,
    reason: 'Human Immunoglobulin G',
    createTime: '2021-07-27',
    startTime: '2021-07-08',
    endTime: '2021-08-03',
  },
  {
    id: 3,
    userId: 2,
    type: 5,
    status: 3,
    amount: 81397,
    reason: 'ALCOHOL',
    createTime: '2021-02-24',
    startTime: '2021-04-11',
    endTime: '2021-01-08',
  },
  {
    id: 4,
    userId: 2,
    type: 6,
    status: 4,
    amount: 80006,
    reason: 'Carbidopa and Levodopa',
    createTime: '2021-08-10',
    startTime: '2020-12-21',
    endTime: '2021-11-27',
  },
  {
    id: 5,
    userId: 2,
    type: 6,
    status: 2,
    amount: 76016,
    reason: 'Niacinamide',
    createTime: '2021-01-22',
    startTime: '2021-03-07',
    endTime: '2021-02-24',
  },
  {
    id: 6,
    userId: 2,
    type: 6,
    status: 4,
    amount: 55551,
    reason: 'Benzalkonium chloride 0.13%',
    createTime: '2021-05-26',
    startTime: '2021-09-10',
    endTime: '2021-05-23',
  },
  {
    id: 7,
    userId: 2,
    type: 5,
    status: 1,
    amount: 71569,
    reason: 'Methimazole',
    createTime: '2021-12-05',
    startTime: '2021-05-31',
    endTime: '2021-06-20',
  },
  {
    id: 8,
    userId: 2,
    type: 6,
    status: 2,
    amount: 7123,
    reason: 'Nystatin and Triamcinolone Acetonide',
    createTime: '2021-04-02',
    startTime: '2021-05-24',
    endTime: '2021-07-10',
  },
  {
    id: 9,
    userId: 2,
    type: 6,
    status: 4,
    amount: 70581,
    reason: 'Fluorouracil',
    createTime: '2021-10-03',
    startTime: '2021-07-27',
    endTime: '2021-05-23',
  },
  {
    id: 10,
    userId: 2,
    type: 6,
    status: 3,
    amount: 36001,
    reason: 'Simvastatin',
    createTime: '2021-09-13',
    startTime: '2021-06-08',
    endTime: '2021-01-24',
  },
  {
    id: 11,
    userId: 2,
    type: 5,
    status: 2,
    amount: 52124,
    reason: 'prednicarbate',
    createTime: '2021-04-01',
    startTime: '2021-11-09',
    endTime: '2021-06-20',
  },
  {
    id: 12,
    userId: 2,
    type: 6,
    status: 3,
    amount: 56537,
    reason: 'DIMETHICONE',
    createTime: '2021-08-30',
    startTime: '2021-11-07',
    endTime: '2021-10-27',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ApplyDataService {
  data: ApplyData[] = [];

  constructor(private http: HttpClient, private accountService: AccountService) {}

  getDataById(id: number) {
    if (this.data.length) {
      const targetData = this.data.filter((e) => e.id === id)[0];
      return of(targetData);
    }
    return this.http.get<ApiResponse<ApplyData>>(`/expense/apply/${id}`).pipe(map((e) => e.data));
    // return of(this.data[0]);
  }

  getAllData(condition: Partial<ApplyDataQueryCondition>) {
    return this.http.get<ApplyDataResponse>('/expense/apply', { params: condition }).pipe(
      tap((e) => {
        this.data = e.data.expenses;
      })
    );
    // return of({ code: 200, msg: '', data: APPLY_DATA }).pipe(
    //   delay(300),
    //   tap((e) => {
    //     this.data = e.data;
    //   })
    // );
  }

  setStatus({ id, status, adminReason }: { id: number; status: number; adminReason?: string }) {
    // const target = this.data.find((e) => e.id === id);
    // if (target) target.status = status;
    // return of({});
    return this.http.patch(`/expense/apply/${id}`, {
      approverId: this.accountService.userInfo.getValue()?.id,
      status,
      ...(adminReason && { adminReason }),
    });
  }

  addData(params: any) {
    // const newApplyData = {
    //   ...params,
    //   status: RequestStatus.Submitted,
    //   id: this.data.length + 1,
    // };
    // this.data.push(newApplyData);
    // return of({});
    const applyData = {
      userId: this.accountService.userInfo.getValue()?.id,
      ...params,
    };
    return this.http.post(`/expense/apply`, applyData);
  }
}
