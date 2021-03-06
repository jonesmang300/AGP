import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { DataService } from './shared/services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatExpansionModule } from '@angular/material/expansion';

import { SharedModule } from './shared/shared.module';
import { ManageModule } from './logged/manage/manage.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { LoggedComponent } from './logged/logged.component';
import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { TournamentsComponent } from './logged/tournaments/tournaments.component';
import { AddTournamentComponent } from './logged/tournaments/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './logged/tournaments/edit-tournament/edit-tournament.component';
import { TournamentComponent } from './logged/tournaments/tournament/tournament.component';
import { CourseComponent } from './logged/course/course.component';
import { AddRatingComponent } from './logged/course/add-rating/add-rating.component';
import { PlayersComponent } from './logged/players/players.component';
import { AddRegistrationDateComponent } from './logged/tournaments/add-registration-date/add-registration-date.component';
import { EditInformationComponent } from './logged/tournaments/edit-information/edit-information.component';
import { EditRegistrationDateComponent } from './logged/tournaments/edit-registration-date/edit-registration-date.component';
import { InformationComponent } from './logged/tournaments/information/information.component';
import { AddInformationComponent } from './logged/tournaments/add-information/add-information.component';
import { RegistrationDateComponent } from './logged/tournaments/registration-date/registration-date.component';

import { DatePipe } from '@angular/common';
import { AddEventFormatComponent } from './logged/tournaments/add-event-format/add-event-format.component';
import { EditEventFormatComponent } from './logged/tournaments/edit-event-format/edit-event-format.component';
import { EventFormatComponent } from './logged/tournaments/event-format/event-format.component';
import { EditEventDrawTypeComponent } from './logged/tournaments/edit-event-draw-type/edit-event-draw-type.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddPlayerComponent } from './logged/players/add-player/add-player.component';
import { PlayerComponent } from './logged/players/player/player.component';
import { EditRatingComponent } from './logged/course/edit-rating/edit-rating.component';
import { RatingComponent } from './logged/course/rating/rating.component';
import { CourseTypesComponent } from './logged/course/course-types/course-types.component';
import { CourseTypeComponent } from './logged/course/course-type/course-type.component';
import { CourseTypeHolesComponent } from './logged/course/course-type-holes/course-type-holes.component';
import { AddCourseTypeComponent } from './logged/course/add-course-type/add-course-type.component';

import { AddCourseTypeHoleComponent } from './logged/course/add-course-type-hole/add-course-type-hole.component';
import { EditCourseTypeHoleComponent } from './logged/course/edit-course-type-hole/edit-course-type-hole.component';
import { EditCourseTypeComponent } from './logged/course/edit-course-type/edit-course-type.component';
import { SignupConfirmationComponent } from './auth/signup-confirmation/signup-confirmation.component';
import { ChartistModule } from 'ng-chartist';
import { PublicComponent } from './public/public.component';
import { EventsComponent } from './public/events/events.component';
import { LeaderboardComponent } from './public/leaderboard/leaderboard.component';
import { TournamentDetailComponent } from './logged/tournaments/tournament/tournament-detail/tournament-detail.component';
import { AddFieldComponent } from './logged/tournaments/tournament/add-field/add-field.component';
import { RegistrationSlotsComponent } from './logged/tournaments/tournament/registration-slots/registration-slots.component';
import { TournamentRegistrationDetailComponent } from './logged/tournaments/tournament/tournament-registration-detail/tournament-registration-detail.component';
import { EditFieldComponent } from './logged/tournaments/tournament/edit-field/edit-field.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoggedComponent,
    DashboardComponent,
    TournamentsComponent,
    AddTournamentComponent,
    EditTournamentComponent,
    TournamentComponent,
    CourseComponent,
    AddRatingComponent,
    PlayersComponent,
    AddRatingComponent,
    AddRegistrationDateComponent,
    EditRegistrationDateComponent,
    RegistrationDateComponent,
    AddInformationComponent,
    EditInformationComponent,
    InformationComponent,
    AddEventFormatComponent,
    EditEventFormatComponent,
    EventFormatComponent,
    EditEventDrawTypeComponent,
    PageNotFoundComponent,
    SignupComponent,
    EditRatingComponent,
    AddPlayerComponent,
    PlayerComponent,
    PageNotFoundComponent,
    SignupComponent,
    EditRatingComponent,
    RatingComponent,
    CourseTypesComponent,
    CourseTypeComponent,
    CourseTypeHolesComponent,
    AddCourseTypeComponent,
    AddCourseTypeHoleComponent,
    EditCourseTypeHoleComponent,
    EditCourseTypeComponent,
    SignupConfirmationComponent,
    PublicComponent,
    EventsComponent,
    LeaderboardComponent,
    TournamentDetailComponent,
    AddFieldComponent,
    RegistrationSlotsComponent,
    TournamentRegistrationDetailComponent,
    EditFieldComponent,

  ],
  imports: [
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ManageModule,
    SharedModule,
    NgxUiLoaderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ChartistModule
  ],
  providers: [AuthService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
