import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
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

  onSubmit() {}
}
