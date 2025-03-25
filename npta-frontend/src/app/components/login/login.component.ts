import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegisterMode = false;
  playerName: string = ''; // Store player name

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordsMatch }
    );
  }

  get currentForm() {
    return this.isRegisterMode ? this.registerForm : this.loginForm;
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.resetForms();
  }

  resetForms() {
    this.loginForm.reset();
    this.registerForm.reset();
  }

  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.currentForm.valid) {
      this.playerName = this.currentForm.get('email')?.value.split('@')[0]; // Extract name from email
      this.router.navigate(['/game-mode'], { queryParams: { name: this.playerName } }); // Navigate with player name
    }
  }
}