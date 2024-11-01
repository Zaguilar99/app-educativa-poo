import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AlertService } from '../../../../shared/services/alert.service';
import { SessionService } from '../../../../shared/services/session.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
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
export class LoginComponent {
  email: string;
  password: string;
  returnUrl: string;
  viewPassword: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private authService: AuthService,
    private sessionService: SessionService,
  ) {}

  login() {
    if (!this.email?.trim() || !this.password?.trim()) {
      this.alertService.warn('Ingrese un usuario y contraseña');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (data) => {
        if (data.token) {
          this.sessionService.saveSession(data);
          this.router.navigate(['/dashboard']);
        } else {
          this.alertService.error('Usuario o contraseña incorrectos');
        }
      },
      error: (err) => {
        this.alertService.error('Error en el inicio de sesión');
      },
    });
  }
}
