import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {SurveyService} from '../../shared/services/survey.service';
import {FilledSurveyModel} from '../../shared/models/filled-survey.model';
import {send} from 'q';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-fill-survey',
  templateUrl: './fill-survey.component.html',
  styleUrls: ['./fill-survey.component.scss']
})
export class FillSurveyComponent implements OnInit {

  private routeSub: Subscription;
  id;
  survey;
  filledQuestion = [];
  numberOfQuestions;
  notFilled = false;
  constructor(private readonly route: ActivatedRoute,
              private readonly surveyService: SurveyService,
              private snackBar: MatSnackBar,
              private readonly router: Router) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.surveyService.getSurveyById(params.id)
        .subscribe(response => {
          this.survey = response;
          this.numberOfQuestions = response[0].question.length;
          console.log(response);
        }, error => {
          console.log(error);
        });
    });
  }

  addAnswer() {
    let sendAnswers = true;
    for (let i = 0; i < this.numberOfQuestions; i++) {
      if (!this.filledQuestion[i]) {
        sendAnswers = false;
      }
    }
    if (sendAnswers) {
      const questions: {answer: string, contents: string}[] = [];
      for (let i = 0; i < this.survey[0].question.length; i++) {
        questions.push({
          contents: this.survey[0].question[i].contents,
          answer: this.filledQuestion[i],
        });
      }
      const filledSurvey: FilledSurveyModel = {
        title: this.survey[0].title,
        question: questions,
      };
      this.surveyService.sendFilledSurvey(filledSurvey)
        .subscribe(response => {
          console.log(response);
          this.snackBar.open('Ankietę wypełniono!', 'Sukces!', {duration: 5000});
          this.router.navigate(['home']);
        }, error => {
          console.log(error);
          this.snackBar.open('Coś poszło nie tak!', 'Error', {duration: 5000});
        });
    } else {
      this.notFilled = true;
    }
  }
}
