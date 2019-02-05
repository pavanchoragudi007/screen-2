import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  @Input()
  set selectdata(data) {
    console.log(data);
    this._data = data;
    this.setFormData();

  }

  @Output() updateData = new EventEmitter();
  private _data: any = {};
  editForm: any;
  constructor() { }

  ngOnInit() {
    this.setFormData();

  }
  setFormData() {
    this.editForm = new FormGroup({
      name: new FormControl(this._data.name),
      amount: new FormControl(this._data.amount),
      date: new FormControl(this._data.expenseDate),
      category: new FormControl(this._data.category)
    });
  }
  onEditSubmit() {
    // this.selectdata.push(data);
    let data = this.editForm.value;
    data.id = this._data.id;
    data.action = this._data.action;
    this.updateData.emit(data);
  }

}
