import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user = {
    name: 'John Doe',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=John+Doe'
  };

  settingsOpen = false;

  toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
  }
}