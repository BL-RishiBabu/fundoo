import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/userService/user-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private service: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);
  //   }
  // }

  onSubmit() {
    // debugger
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          localStorage.setItem("tokken", response.id);
          // console.log(response);
        },
        error: () => {
          console.log("Error occured!");
        }
      });
    }
  }

  goToRegistration() {
    return this.router.navigate(['/registration']);
  }
}
