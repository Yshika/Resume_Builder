import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    name: this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
    }),
    education: this.fb.group({
      degree: [''],
      branch: [''],
      cgpa: [''],
      college: [''],
    }),
    address: this.fb.group({
      street: [''],
      location: [''],
      zip: [''],
    }),
    phone: [''],
  });
  onSubmit(){
    console.log("Form saved");
  }
  ngOnInit(): void {}
}
