import { Component, inject, OnInit } from '@angular/core';
import { NotificationService, Notification } from '@/app/services/notification.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [NgClass],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  notification: Notification | null = null;
  private notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.notificationService.notification$.subscribe((notif) => {
      this.notification = notif;
    })
  }
}
