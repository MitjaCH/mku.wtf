import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  private apiUrl = 'https://api.mku.wtf/api/shortcodes';
  private http = inject(HttpClient);

  // API call to get the original URL
  getOriginalUrl(shortcode: string): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${shortcode}`);
  }
}
