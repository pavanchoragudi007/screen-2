import { Injectable } from '@angular/core';
import { PersonalModule } from './personal.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private personalData: PersonalModule[] =
    [
      {
        id: 1,
        name: 'Bakery and Bread',
        amount: 125,
        expenseDate: '12/25/2018',
        category: "Food"
      },
      {
        id: 2,
        name: 'Apparels',
        amount: 12500,
        expenseDate: '12/2/2018',
        category: "Shopping"
      },
      {
        id: 3,
        name: 'Shimla Trip',
        amount: 65400,
        expenseDate: '10/20/2018',
        category: "Travel"
      },
      {
        id: 4,
        name: 'Medicines',
        amount: 850,
        expenseDate: '12/7/2018',
        category: "Health"
      },
      {
        id: 5,
        name: 'Meat',
        amount: 550,
        expenseDate:'12/25/2018',
        category: "Food"
      },
      {
        id: 6,
        name: 'Bus Tickets',
        amount: 1150,
        expenseDate: '12/21/2018',
        category: "Food"
      }
    ]

  getPersonal(): PersonalModule[] {
    return this.personalData;
  }
}
