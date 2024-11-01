import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuService } from './layout/service/app.menu.service';

@Component({
  selector: 'ims-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'IMS-Ecommerce';

  constructor(
    private router: Router,
    private menuService: MenuService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // Verificar la URL actual al iniciar la aplicación
    if (this.router.url.includes('/qr')) {
      this.menuService.hideMenu();
    } else {
      this.menuService.showMenu();
    }

    // Suscribirse a los eventos de navegación
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('/qr')) {
          this.menuService.hideMenu();
        } else {
          this.menuService.showMenu();
        }
        this.cdr.detectChanges();
      }
    });
  }
}
