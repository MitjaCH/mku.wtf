import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  showNotification(type: 'success' | 'error' | 'warning' | 'info', message: string) {
    this.notificationSubject.next({ type, message });

    // Auto hide after 5 seconds
    setTimeout(() => {
      this.clearNotification();
    }, 5000);
  }

  clearNotification() {
    this.notificationSubject.next(null);
  }
}