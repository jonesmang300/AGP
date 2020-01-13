import { Component, OnInit } from "@angular/core";
import { DrawType } from "src/app/shared/interfaces/draw-type";
import { DrawTypeService } from "src/app/shared/services/draw-type.service";
import { EventType } from "src/app/shared/interfaces/event-type";
import { EventTypeService } from "src/app/shared/services/event-type.service";
import { Profile } from "src/app/shared/interfaces/profile";
import { ProfileService } from "src/app/shared/services/profile.service";
import { TournamentService } from "src/app/shared/services/tournament.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { Tournament } from 'src/app/shared/interfaces/tournament';
@Component({
  selector: "app-add-tournament",
  templateUrl: "./add-tournament.component.html",
  styleUrls: ["./add-tournament.component.css"]
})
export class AddTournamentComponent implements OnInit {
  public moduleTitle: string = "Add Tournament";
  public tournamentForm: FormGroup;
  public tournamentData: any;
  public eventTypes: EventType[];
  public drawTypes: DrawType[];
  public profiles: Profile[];
  public profileId: Profile;

  constructor(
    public datepipe: DatePipe,
    private eventTypeService: EventTypeService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private tournamentService: TournamentService,
    private drawTypeService: DrawTypeService,
    private router: Router
  ) {}


  addTournament() {

    console.log(this.tournamentForm.value);
    this.tournamentService.addTournament(this.tournamentForm.value).then(
      (result:Tournament) => {
        console.log(result);
        this.router.navigate(['/tournaments/tournament', result.pk_eventid]);
      },
      error => console.log(error)
    );
  }

  getDrawTypes() {
    this.drawTypeService.getDrawTypes().then(
      (result: DrawType[]) => {
        this.drawTypes = result;

      },
      error => console.log(error)
    );
  }

  getEventTypes() {
    this.eventTypeService.getEventTypes().then(
      (result: EventType[]) => {
        this.eventTypes = result;

      },
      error => console.log(error)
    );
  }

  getProfiles() {
    this.profileService.getProfiles().then(
      (result: Profile[]) => {
        this.profiles = result;

      },
      error => console.log(error)
    );
  }

  ngOnInit() {

    this.getEventTypes();
    this.getDrawTypes();
    this.getProfiles();
    this.tournamentForm = this.formBuilder.group({
      event: ["", Validators.compose([Validators.required])],
      event_description: ["", Validators.compose([Validators.required])],
      start_date: ["", Validators.compose([Validators.required])],
      end_date: ["", Validators.compose([Validators.required])],
      fk_draw_typeid: ["", Validators.compose([Validators.required])],
      fk_event_typeid: ["", Validators.compose([Validators.required])],
      fk_profileid: ["", Validators.compose([Validators.required])],
    });
  }
}
