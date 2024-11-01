import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppMenuitemComponent } from './app.menuitem.component';

@Component({
  imports: [CommonModule, AppMenuitemComponent],
  standalone: true,
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  ngOnInit() {
    this.model = [
      // {
      //   label: 'Principales',
      //   icon: 'pi pi-th-large',
      //   items: [
      //     {
      //       label: 'Calibres',
      //       icon: 'pi pi-stop',
      //       routerLink: ['/calibers'],
      //     },
      //   ],
      // },
    ];
  }
}
