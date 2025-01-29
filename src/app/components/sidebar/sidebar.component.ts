import { Component, ElementRef, ViewChild, HostListener, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() tabChange = new EventEmitter<string>();

  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    avatarUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=John+Doe'
  };

  settingsOpen = false;

  @ViewChild('avatarRef') avatarRef!: ElementRef;
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.settingsOpen && 
        this.avatarRef && !this.avatarRef.nativeElement.contains(event.target) &&
        this.dropdownRef && !this.dropdownRef.nativeElement.contains(event.target)) {
      this.settingsOpen = false;
    }
  }

  changeTab(tab: string) {
    this.tabChange.emit(tab);
  }
}