import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      gender: ['', Validators.required],
      profileImage: [''],
      bio: [''],
      username: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
  }
}
