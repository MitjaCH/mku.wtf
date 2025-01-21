import { Component, inject, OnInit } from '@angular/core';
import { UbAlertDirective, UbAlertDescriptionDirective, UbAlertTitleDirective } from '@/components/ui/alert';
import { NotificationService, Notification } from '@/app/services/notification.service';

@Component({
  selector: 'app-notification',
  imports: [UbAlertDescriptionDirective, UbAlertTitleDirective, UbAlertDirective],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  notification: Notification | null = null;
  private notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(n => this.notification = n);
  }
}
