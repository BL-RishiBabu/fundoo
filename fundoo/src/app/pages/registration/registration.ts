import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserService } from '../../services/userService/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  registrationForm: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      service: 'advance'
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.service.registration(this.registrationForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: () => {
          console.log("Error occured!");
        }
      });
    }
  }

  goToLogin() {
    return this.router.navigate(['/login']);
  }
}
