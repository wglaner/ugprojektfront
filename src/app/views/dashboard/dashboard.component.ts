import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SurveyService} from '../../shared/services/survey.service';
import {SessionService} from '../../shared/services/session.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../shared/components/confirm-dialog/confirm-dialog.component';
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  surveys;
  dataSource: any[];
  displayedSurveyColumns = ['Nazwa ankiety', 'Ilość pytań', 'Twórca', 'Link', 'delete'];
  users;
  displayedUserColumns = ['Imię', 'Nazwisko', 'Email', 'Rola', 'delete'];
  link = 'localhost:4200/survey/fill/';
  role;
  constructor(private readonly router: Router,
              private readonly surveyService: SurveyService,
              private readonly sessionService: SessionService,
              private readonly userService: UserService,
              private snackBar: MatSnackBar,
              private cd: ChangeDetectorRef,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.role = this.sessionService.getRole();
    if (this.role === 'user') {
      this.fetchData();
    } else {
      this.fetchDataAsAdmin();
      this.userService.getUsers()
        .subscribe(response => {
          this.users = response;
          console.log(this.users);
        });
    }

  }
  fetchData() {
    this.surveyService.getSurveyByEmail(this.sessionService.getEmail())
      .subscribe(response => {
        console.log(response);
        this.surveys = response;
        this.cd.detectChanges();
      });
  }
  fetchDataAsAdmin() {
    this.surveyService.getSurveys()
      .subscribe(response => {
        this.surveys = response;
        this.cd.detectChanges();
      });
  }
  onCreateSurvey() {
    this.router.navigate(['survey/create']);
  }

  onDetails(_id: any) {
    this.router.navigate([`survey/details/${_id}`]);
  }

  onDelete(id: any) {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: { title: 'Potwierdzenie usunięcia', message: 'Czy na pewno chcesz usunąć ankietę?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.surveyService.deleteSurvey(id)
          .subscribe(res => {
            console.log(res);
          });
        this.ngOnInit();
      }
    });
  }

  onUserDelete(user: any) {
    if (user.role === 'admin') {
      this.snackBar.open('Nie można usunąć admina!', 'Błąd', {duration: 5000});
    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '450px',
        data: { title: 'Potwierdzenie usunięcia', message: 'Czy na pewno chcesz usunąć użytkownika?'}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.userService.deleteUser(user._id)
            .subscribe(res => {
              console.log(res);
            });
          this.ngOnInit();
        }
      });
    }
  }
}
