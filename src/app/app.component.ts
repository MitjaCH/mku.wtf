import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { NotificationComponent } from './components/notification/notification.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotificationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mku-wtf';
  showNavbar = true;
  private hiddenRoutes = ['/dashboard', '/login', '/register'];
  warningMessage: string | null = "⚠️ This web app is under development. Some features may not work or are not implemented yet."

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showNavbar = !this.hiddenRoutes.includes(event.url);
      });
  }
}
