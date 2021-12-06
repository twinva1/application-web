import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import { ApplyDataService } from 'app/service';
import { RequestStatus, ExpenseType } from 'app/util/constants';
import { ApplyViewData } from 'app/util/type';
@Component({
  selector: 'app-apply-view',
  templateUrl: './apply-view.component.html',
  styleUrls: ['./apply-view.component.scss'],
})
export class ApplyViewComponent implements OnInit {
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
