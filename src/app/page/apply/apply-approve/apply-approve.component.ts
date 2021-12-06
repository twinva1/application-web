import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import { ApplyDataService } from 'app/service';
import { RequestStatus, ExpenseType } from 'app/util/constants';
import { ApplyViewData } from 'app/util/type';

@Component({
  selector: 'app-apply-approve',
  templateUrl: './apply-approve.component.html',
  styleUrls: ['./apply-approve.component.scss'],
})
export class ApplyApproveComponent implements OnInit {
  viewData!: ApplyViewData;

  constructor(private activeRoute: ActivatedRoute, private applyDataService: ApplyDataService) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (!id) return;
    this.applyDataService.getDataById(+id).subscribe((data) => {
      this.viewData = {
        ...data,
        type: ExpenseType[data.type],
        status: RequestStatus[data.status],
      };
    });
  }
}
