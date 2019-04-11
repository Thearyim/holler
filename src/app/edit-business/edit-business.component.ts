import { Component,Input, OnInit } from '@angular/core';
import { Business } from '../business.model';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-edit-business',
  templateUrl: './edit-business.component.html',
  styleUrls: ['./edit-business.component.css'],
  providers: [BusinessService]
})
export class EditBusinessComponent implements OnInit {
  @Input() selectedBusiness;

  constructor(private businessService: BusinessService) { }

  ngOnInit() {
  }

  beginUpdatingBusiness(businessToUpdate){
  this.businessService.updateBusiness(businessToUpdate);
  }

  beginDeletingBusiness(businessToDelete){
    if(confirm(`Are you sure you want to delete ${businessToDelete.title}?`)){
      this.businessService.deleteBusiness(businessToDelete);
  }
}

}
