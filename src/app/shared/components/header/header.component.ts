import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SessionService} from '../../services/session.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;
  role;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private readonly sessionService: SessionService,
              private readonly userService: UserService) { }

  ngOnInit() {
    if (this.sessionService.isLoggedIn()) {
      this.userService.setLogin(true);
    }
    this.userService.cast.subscribe(isLoggedIn => {
      this.isUserLoggedIn = isLoggedIn;
      this.role = this.sessionService.getRole();
    });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.userService.setLogin(false);
  }
}
