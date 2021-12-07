import { Injectable } from '@angular/core';
import { BehaviorSubject, of, filter, map, Observable, from, tap } from 'rxjs';
import { delay } from 'rxjs/operators';
//
import { ApplyData } from 'app/util/type';
import { RequestStatus } from 'app/util/constants';
import { HttpClient } from '@angular/common/http';

const APPLY_DATA: Array<ApplyData> = [{"id":1,"type":6,"status":2,"amount":897,"reason":"Losartan Potassium","createDate":"2021-10-22","startDate":"2021-06-21","endDate":"2021-04-26"},
{"id":2,"type":5,"status":4,"amount":71796,"reason":"Panthenol","createDate":"2021-07-21","startDate":"2021-05-26","endDate":"2021-09-11"},
{"id":3,"type":5,"status":1,"amount":29962,"reason":"ATP (Adenosine triphosphate disodium), Malic Acid, Natrum oxalaceticum, Oroticum acidum, Riboflavinum, Apiolum, Cinnamic acid, DHEA (Dehydroepiandrosterone),","createDate":"2021-02-23","startDate":"2021-11-19","endDate":"2021-03-26"},
{"id":4,"type":6,"status":2,"amount":33149,"reason":"cyclobenzaprine hydrochloride","createDate":"2021-02-17","startDate":"2021-07-14","endDate":"2021-09-08"},
{"id":5,"type":6,"status":1,"amount":1128,"reason":"Carvedilol","createDate":"2021-08-21","startDate":"2021-11-05","endDate":"2021-03-08"},
{"id":6,"type":6,"status":2,"amount":43149,"reason":"Burweed Marsh Elder","createDate":"2021-10-31","startDate":"2021-06-13","endDate":"2021-11-25"},
{"id":7,"type":5,"status":2,"amount":24552,"reason":"zinc gluconate","createDate":"2021-08-14","startDate":"2021-11-30","endDate":"2021-04-23"},
{"id":8,"type":5,"status":1,"amount":32521,"reason":"Anti-Inhibitor Coagulant Complex","createDate":"2021-08-28","startDate":"2021-04-03","endDate":"2021-03-24"},
{"id":9,"type":5,"status":4,"amount":57369,"reason":"Western Ragweed","createDate":"2021-08-16","startDate":"2021-07-20","endDate":"2021-01-18"},
{"id":10,"type":5,"status":2,"amount":57801,"reason":"Pyrithione Zinc","createDate":"2021-08-08","startDate":"2021-03-20","endDate":"2021-01-31"}]

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
    return of(this.data[0]);
  }

  getAllData(condition: Partial<ApplyData> | null = null) {
    return of(APPLY_DATA).pipe(
      delay(500),
      tap((e) => {
        this.data = e;
      })
    );
  }

  setStatus({ id, status }: { id: number; status: number }) {
    const target = this.data.find((e) => e.id === id);
    if (target) target.status = status;
  }

  addData(params: any) {
    const newApplyData = {
      ...params,
      status: RequestStatus.Submitted,
      id: this.data.length + 1,
    };
    this.data.push(newApplyData);
  }
}
