import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators }  from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',[Validators.required,Validators.minLength(10)]]
    });
  }

  get f (){
    return this.LoginForm.controls; 
  }
  onSubmit()
  {
    this.submitted = true;

      if(this.LoginForm.invalid)
      {
        return;
      }
      else {
        
      }
  }

}
