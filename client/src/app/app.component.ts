import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './core/models/user';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  user: User;

  constructor(
    private router: Router,
    private authService: AuthService
) {
    this.authService.user.subscribe(x => this.user = x);
}

logout() {
    this.authService.logout();
}
}
