import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlShortenerService } from '../../services/url-shortener.service';

@Component({
  selector: 'app-redirect',
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private urlShortenerService = inject(UrlShortenerService);

  ngOnInit(): void {
    const shortcode = this.route.snapshot.paramMap.get('shortcode'); // Get the shortcode from the URL

    if (shortcode) {
      this.urlShortenerService.getOriginalUrl(shortcode).subscribe({
        next: (originalUrl: string) => {
          // Redirect to the original URL
          window.location.href = originalUrl;
        },
        error: () => {
          // Handle if the shortcode is invalid or the API fails
          this.router.navigate(['/']); // Redirect to the home page on error
        },
      });
    }
  }
}