import { Component } from '@angular/core';
import { UbAvatarImageDirective, UbAvatarFallbackDirective } from '@/components/ui/avatar';

@Component({
  selector: 'app-sidebar',
  imports: [UbAvatarImageDirective, UbAvatarFallbackDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  user = {
    name: 'John Doe',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=John+Doe'
  };

  settingsOpen = false;

  toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
  }
}