import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AlertService } from '../../../../shared/services/alert.service';
import { IRegisterData } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ToastModule,
    RouterModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [AlertService, ConfirmationService, MessageService],
})
export class RegisterComponent {
  registerData: IRegisterData = {
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    repeatPassword: '',
  };

  viewPassword: boolean = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthService,
  ) {}

  register() {
    if (!this.registerData.email.trim() || !this.registerData.password.trim()) {
      this.alertService.warn('Ingrese un correo electrónico y contraseña');
      return;
    }

    if (this.registerData.password !== this.registerData.repeatPassword) {
      this.alertService.warn('Las contraseñas no coinciden');
      return;
    }

    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        this.alertService.success('Usuario registrado exitosamente');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.alertService.error('Error al registrar el usuario');
      },
    });
  }
}
