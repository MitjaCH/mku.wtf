import { Component } from '@angular/core';
import { SidebarComponent } from '@/app/components/sidebar/sidebar.component';
import { ApiComponent } from '../tabs/api/api.component';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, ApiComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedTab: string = 'home';

  setTab(tab: string) {
    this.selectedTab = tab;
  }

}