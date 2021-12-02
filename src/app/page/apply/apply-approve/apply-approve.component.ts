import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import { ApplyDataService } from 'app/service/applyData.service';
import { RequestStatus, ExpenseType } from 'app/util/constants';
import { ApplyViewData } from 'app/util/type';

@Component({
  selector: 'app-apply-approve',
  templateUrl: './apply-approve.component.html',
  styleUrls: ['./apply-approve.component.scss']
})
export class ApplyApproveComponent implements OnInit {
  viewData!: ApplyViewData;

  constructor(
    private activeRoute: ActivatedRoute,
    private applyDataService: ApplyDataService
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      const targetData = this.applyDataService.getApplyDataById(+id);
      this.viewData = {
        ...targetData,
        type: ExpenseType[targetData.type],
        status: RequestStatus[targetData.status],
      };
    }
  }
}
