import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tool-list',
  imports: [RouterModule],
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools = [
    { name: 'URL Shortener', description: 'Shorten long URLs for easy sharing.', link: '/shortener' },
    { name: 'JSON Formatter', description: 'Format and validate JSON data.', link: '/json-formatter' },
    { name: 'Regex Tester', description: 'Test regular expressions online.', link: '/regex-tester' },
    { name: 'QR Code Generator', description: 'Generate QR codes from text.', link: '/qr-generator' },
  ];
  
}
