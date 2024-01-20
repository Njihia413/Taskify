import { Component } from '@angular/core';
import {AppSidebarComponent} from "../app-sidebar/app-sidebar.component";
import {TopbarComponent} from "../topbar/topbar.component";

@Component({
  selector: 'app-app.layout',
  standalone: true,
  imports: [
    AppSidebarComponent,
    AppSidebarComponent,
    TopbarComponent,
  ],
  templateUrl: './app.layout.component.html',
  styleUrl: './app.layout.component.css'
})
export class AppLayoutComponent {

}
