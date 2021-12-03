import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
//
import { ApplyData } from 'app/util/type';
import { RequestStatus } from 'app/util/constants';
import { HttpClient } from '@angular/common/http';

const APPLY_DATA: Array<ApplyData> = [
  {
    id: 1,
    type: 1,
    status: 2,
    amount: 20420,
    reason: 'Bromfenac sodium',
    createDate: '2020-12-23',
    startDate: '2021-02-03',
    endDate: '2021-09-19',
  },
  {
    id: 2,
    type: 0,
    status: 0,
    amount: 54595,
    reason: 'Benzalkonium Chloride',
    createDate: '2021-11-23',
    startDate: '2021-07-13',
    endDate: '2020-12-14',
  },
  {
    id: 3,
    type: 1,
    status: 3,
    amount: 95998,
    reason: 'Gabapentin',
    createDate: '2021-11-04',
    startDate: '2021-05-11',
    endDate: '2021-01-14',
  },
  {
    id: 4,
    type: 1,
    status: 3,
    amount: 48261,
    reason: 'acetaminophen, dextromethorphan hydrobromide and doxylamine succinate',
    createDate: '2020-12-02',
    startDate: '2021-03-23',
    endDate: '2021-10-06',
  },
  {
    id: 5,
    type: 1,
    status: 2,
    amount: 21383,
    reason: 'Diphenhydramine Hydrochloride',
    createDate: '2021-02-01',
    startDate: '2021-03-16',
    endDate: '2021-04-09',
  },
  {
    id: 6,
    type: 1,
    status: 0,
    amount: 64421,
    reason: 'Acetaminophen, Dextromethorphan HBr, Phenylephrine HCl and Guaifenesin',
    createDate: '2021-11-22',
    startDate: '2021-08-02',
    endDate: '2020-12-19',
  },
  {
    id: 7,
    type: 1,
    status: 2,
    amount: 78468,
    reason: 'DEXTROMETHORPHAN HYDROBROMIDE, GUAIFENESIN',
    createDate: '2021-06-20',
    startDate: '2021-10-13',
    endDate: '2021-03-09',
  },
  {
    id: 8,
    type: 1,
    status: 2,
    amount: 468,
    reason: 'Zinc Oxide',
    createDate: '2021-05-11',
    startDate: '2021-04-03',
    endDate: '2021-06-14',
  },
  {
    id: 9,
    type: 0,
    status: 1,
    amount: 41901,
    reason: 'digoxin',
    createDate: '2021-09-02',
    startDate: '2021-02-05',
    endDate: '2021-07-25',
  },
  {
    id: 10,
    type: 1,
    status: 2,
    amount: 42771,
    reason: 'dolutegravir sodium, abacavir sulfate, lamivudine',
    createDate: '2020-12-10',
    startDate: '2021-02-24',
    endDate: '2021-10-02',
  },
  {
    id: 11,
    type: 1,
    status: 1,
    amount: 29866,
    reason: 'Soybean',
    createDate: '2020-12-09',
    startDate: '2021-05-18',
    endDate: '2021-10-17',
  },
  {
    id: 12,
    type: 0,
    status: 0,
    amount: 31957,
    reason: 'mesalamine',
    createDate: '2021-11-13',
    startDate: '2021-08-03',
    endDate: '2021-01-30',
  },
  {
    id: 13,
    type: 0,
    status: 3,
    amount: 41279,
    reason: 'Budesonide',
    createDate: '2021-07-30',
    startDate: '2020-12-17',
    endDate: '2021-09-01',
  },
  {
    id: 14,
    type: 0,
    status: 2,
    amount: 79175,
    reason: 'Treatment Set TS332678',
    createDate: '2021-06-12',
    startDate: '2021-03-19',
    endDate: '2021-08-18',
  },
  {
    id: 15,
    type: 0,
    status: 3,
    amount: 35227,
    reason: 'Valproic Acid',
    createDate: '2021-04-25',
    startDate: '2021-07-30',
    endDate: '2021-02-06',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ApplyDataService {
  data = APPLY_DATA;

  constructor(private http: HttpClient) {}

  getApplyDataById(id: number) {
    return this.data.filter((e) => e.id === id)[0];
  }

  getAllApplyData(condition: Partial<ApplyData> | null = null) {
    // return this.http.get<any[]>('https://api.mockaroo.com/api/ac68afa0?count=10&key=9c22b440');
    let filterData = this.data;
    if (condition) {
      console.log('condition', condition);
      Object.keys(condition).forEach((e) => {
        if (e === '') {
          delete condition[e as keyof ApplyData];
        }
      });
      filterData = this.data.filter((e) => {
        if (typeof condition.type === 'number' && e.type !== condition.type) {
          return false;
        }
        if (typeof condition.status === 'number' && e.status !== condition.status) {
          return false;
        }
        if (condition.startDate && condition.endDate) {
          const { startDate, endDate } = condition;
          const sDate = new Date(startDate <= endDate ? startDate : endDate);
          const eDate = new Date(startDate <= endDate ? endDate : startDate);
          const createDate = new Date(e.createDate);

          console.log('sDate', sDate);
          console.log('createDate', createDate);
          console.log('eDate', eDate);
          if (createDate < sDate || createDate > eDate) return false;
        }
        return true;
      });
    }

    return of(filterData).pipe(delay(500));
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
