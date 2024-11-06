import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.Login('username', 'password').subscribe({
      next: (result) => {
        // redirect to dashbaord
        this.router.navigateByUrl('/private/dashboard');
      },
     // ...
    });
  }
}
