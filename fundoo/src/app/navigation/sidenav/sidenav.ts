import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  imports: [MatIconModule, MatListModule, CommonModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {
  navItems = [
    { icon: 'lightbulb', label: 'Notes', active: true },
    { icon: 'notifications', label: 'Reminders', active: false },
    { icon: 'edit', label: 'Edit labels', active: false },
    { icon: 'archive', label: 'Archive', active: false },
    { icon: 'delete', label: 'Trash', active: false }
  ];
}
