import { Component } from '@angular/core';
import { Toolbar } from '../../navigation/toolbar/toolbar';
import { Sidenav } from '../../navigation/sidenav/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-dashboard',
  imports: [
    Toolbar,
    Sidenav,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatInput
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard { }
