import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ApiKey {
  id: string;
  key: string;
  usage: number;
  createdAt: Date;
}

@Component({
  selector: 'app-api',
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  isLoading: boolean = true;
  activeTab: 'settings' | 'docs' = 'settings';

  apiKeys: ApiKey[] = [];
  apiLimit = 1000;

  ngOnInit() {
    setTimeout(() => {
      this.apiKeys = [
        { id: '1', key: 'sk-abcdefg-12345', usage: Math.floor(Math.random() * 1000), createdAt: new Date() },
        { id: '2', key: 'sk-hijklmn-67890', usage: Math.floor(Math.random() * 1000), createdAt: new Date() }
      ];
      this.isLoading = false;
    }, 1500);
  }

  switchTab(tab: 'settings' | 'docs') {
    this.activeTab = tab;
  }

  generateApiKey() {
    this.apiKeys.push({
      id: Math.random().toString(36).substring(2, 8),
      key: 'sk-' + Math.random().toString(36).substring(2, 10) + '-' + Math.random().toString(36).substring(2, 10),
      usage: 0,
      createdAt: new Date()
    });
  }

  revokeApiKey(id: string) {
    this.apiKeys = this.apiKeys.filter(apiKey => apiKey.id !== id);
  }
}
