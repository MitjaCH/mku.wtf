import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router = inject(Router);

  handleExploreClick(): void {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/signup']);
    }
  }

  redirectToGitHub(): void {
    window.open('https://github.com/MitjaCH/api.mku.wtf/issues', '_blank');
  }
}
