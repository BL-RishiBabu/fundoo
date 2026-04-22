import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  @Output() menuClick = new EventEmitter<void>();

  toolBarOptions: any[] = [
    { icon: 'refresh', tooltip: 'Refresh' },
    { icon: 'view_agenda', tooltip: 'List view' },
    { icon: 'settings', tooltip: 'Settings' },
    { icon: 'apps', tooltip: 'Apps' },
    { icon: 'account_circle', tooltip: 'Account' }
  ];
}
