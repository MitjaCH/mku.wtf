import { Component, inject, OnInit } from '@angular/core';
import { SidebarComponent } from '@/app/components/sidebar/sidebar.component';
import { ApiComponent } from '../tabs/api/api.component';
import { EasterEggService } from '@/app/services/easter-egg.service';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, ApiComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedTab: string = 'home';
  isPopupVisible = false;

  private egS = inject(EasterEggService);

  ngOnInit(): void {
    this.egS.triggerEasterEgg = this.activatePopup.bind(this);
  }

  activatePopup() {
    this.isPopupVisible = true;
  }
  user = {
    username: 'John Doe',
    email: 'john.doe@example.com'
  }
  setTab(tab: string) {
    this.selectedTab = tab;
  }

}