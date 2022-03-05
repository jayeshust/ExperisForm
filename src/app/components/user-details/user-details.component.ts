import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {EmailValidator} from "../validators/emailValidator";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetailFormGroup :any;
  submitted=false;
  textAreaValue = '';
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userDetailFormGroup = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+$"),
      ]),
      groupName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+$"),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      contactPerson: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+$"),
      ]),
      countrycode1:new FormControl("", [
        Validators.required,
       
      ]),
      mobile1: new FormControl("", [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern("[- +()0-9]+"),
      ]),
      mobile2: new FormControl("", [
       
      ]),
      reason: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z ]+$"),
      ]),
      addressLine1: new FormControl("", Validators.required),
      addressLine2: new FormControl(""),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      // zipcode: new FormControl(this.zipCode, [
      //   Validators.required,
      //   Validators.minLength(5),
      //   Validators.pattern("[0-9]{5}"),
      //   ZipCodeValidator("zipcode", this.zipCode),
      // ]),
      
    });
  }
  get f() {
    return this.userDetailFormGroup.controls;
  }
  onKeyUp  (){

  }
  save(){
    this.submitted=true;
  }
  submitDetails(){
    this.save();
  }
  numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-\(\)]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-\(\)]/g, "");
    }
    this.userDetailFormGroup.controls["mobile1"].patchValue(event.target.value);
  }

}
