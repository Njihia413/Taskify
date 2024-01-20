import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-app-sidebar',
  standalone: true,
  imports: [
    MenuComponent
  ],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.css'
})
export class AppSidebarComponent {

}
