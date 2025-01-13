import { Component } from '@angular/core';
import { ToolListComponent } from '../../components/tool-list/tool-list.component';

@Component({
  selector: 'app-home',
  imports: [ToolListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
