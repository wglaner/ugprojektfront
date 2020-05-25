import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule, MatListModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './shared/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {AuthGuard} from './shared/auth.guard';
import {SessionService} from './shared/services/session.service';
import { CreateSurveyComponent } from './views/create-survey/create-survey.component';
import {SurveyService} from './shared/services/survey.service';
import { FillSurveyComponent } from './views/fill-survey/fill-survey.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailsSurveyComponent } from './views/details-survey/details-survey.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import {ChartsModule} from 'ng2-charts';
import {ClipboardModule} from 'ngx-clipboard';
import { PopularComponent } from './views/popular/popular.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    CreateSurveyComponent,
    FillSurveyComponent,
    DetailsSurveyComponent,
    ConfirmDialogComponent,
    PopularComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    FontAwesomeModule,
    NgbModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ChartsModule,
    ClipboardModule
  ],
  providers: [UserService, AuthGuard, SessionService, SurveyService],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
