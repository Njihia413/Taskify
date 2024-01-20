import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    InputTextModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

}
