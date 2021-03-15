import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    name: this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
    }),
    education: this.fb.group({
      degree: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      cgpa: ['', [Validators.required]],
      college: ['', [Validators.required]],
    }),
    address: this.fb.group({
      street: ['', [Validators.required]],
      location: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    }),
    phone: ['', [Validators.required]],
  });
  ngOnInit(): void {}
}
