import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { NotificationService } from '@/app/services/notification.service';

@Component({
  selector: 'app-register',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordStrength = 0;
  passwordStrengthText = '';

  private fb = inject(FormBuilder)
  private notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  onPasswordInput(event: any) {
    const password = event.target.value;
    this.passwordStrength = this.calculatePasswordStrength(password);
    this.updatePasswordStrengthText(this.passwordStrength);
  }

  calculatePasswordStrength(password: string): number {
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  }

  updatePasswordStrengthText(strength: number) {
    if (strength === 1) {
      this.passwordStrengthText = 'Weak';
    } else if (strength === 2) {
      this.passwordStrengthText = 'Moderate';
    } else if (strength === 3) {
      this.passwordStrengthText = 'Good';
    } else if (strength >= 4) {
      this.passwordStrengthText = 'Strong';
    } else {
      this.passwordStrengthText = '';
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.notificationService.showNotification('error', 'Please fill out all fields correctly.');
      return;
    }

    // Simulate successful registration
    this.notificationService.showNotification('success', 'Registration successful!');
  }
}