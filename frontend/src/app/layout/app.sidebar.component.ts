import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { KnobModule } from 'primeng/knob';
import { SessionService } from '../../shared/services/session.service';
import { AppMenuComponent } from './app.menu.component';
import { LayoutService } from './service/app.layout.service';
import { MenuService } from './service/app.menu.service';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    AppMenuComponent,
    KnobModule,
    FormsModule,
    ButtonModule,
  ],
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styleUrl: './app.sidebear.component.scss',
})
export class AppSidebarComponent {
  menuVisible: boolean = true;
  knobValue: number = 50;
  timeout: any = null;
  nombreUsuario: string = 'Usuario';

  @ViewChild('menuContainer') menuContainer!: ElementRef;
  constructor(
    public layoutService: LayoutService,
    public el: ElementRef,
    private menuService: MenuService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private sessionService: SessionService,
  ) {}

  ngOnInit(): void {
    this.menuService.menuVisibility$.subscribe((visible) => {
      this.menuVisible = visible;
      this.cdr.detectChanges();
    });
    this.capturarNombre();
  }

  capturarNombre() {
    const user = localStorage.getItem('PI_int_user');
    if (user) {
      const userObj = JSON.parse(user);
      this.nombreUsuario = userObj.nombres + ' ' + userObj.apellidos;
    }
  }

  onMouseEnter() {
    if (!this.layoutService.state.anchored) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.layoutService.state.sidebarActive = true;
    }
  }

  onMouseLeave() {
    if (!this.layoutService.state.anchored) {
      if (!this.timeout) {
        this.timeout = setTimeout(
          () => (this.layoutService.state.sidebarActive = false),
          300,
        );
      }
    }
  }

  anchor() {
    this.layoutService.state.anchored = !this.layoutService.state.anchored;
  }

  logout() {
    this.sessionService.removesKeys();
    this.router.navigate(['/login']);
  }
}
