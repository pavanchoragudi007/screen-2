import { PersonalService } from './../personal.service';
import { Component, OnInit } from '@angular/core';
import { PersonalModule } from '../personal.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  personalData: PersonalModule[];
  selectedPersonData: any = {};
  selectedPersonID: any = {};
  addPerson: any;
  display: boolean = true;


  constructor(private personalService: PersonalService, private _router: RouterModule) { }

  ngOnInit() {
    this.personalData = this.personalService.getPersonal();
    console.log(this.personalData);
    this.addPerson = {
      category: "",
      name: "",
      amount: 0,
      expenseDate: ''
    };
  }

  editData(personData: any, action: any) {
    console.log(personData, action);
    if (action === 'add') {
      personData.id = this.personalData.length + 1;
    }
    this.selectedPersonData = personData;
    this.selectedPersonData.action = action;
    this.display = false;
  }

  deleteSelectedData(index) {
    this.personalData.splice(index - 1, 1);
  }

  deleteData(index) {
    this.selectedPersonID = index;
  }

  updatedData(data: any) {
    if (data.action === 'edit') {
      this.personalData.forEach((e, ind) => {
        if (e.id === data.id) {


          this.personalData[ind] = data;
          this.personalData[ind].expenseDate = new Date(this.personalData[ind].expenseDate)
        }
      });
    } else {
      this.personalData.push(data);
    }
    console.log(this.personalData);
    this.display = true;
  }


}
