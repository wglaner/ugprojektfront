import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SurveyService} from '../../shared/services/survey.service';
import {MatSnackBar} from '@angular/material';
import {Subscription} from 'rxjs';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';
import {ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-details-survey',
  templateUrl: './details-survey.component.html',
  styleUrls: ['./details-survey.component.scss']
})
export class DetailsSurveyComponent implements OnInit {

  private routeSub: Subscription;
  survey;
  answerList;
  answerNumber = 0;

  charts;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];



  constructor(private readonly route: ActivatedRoute,
              private readonly surveyService: SurveyService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.surveyService.getSurveyById(params.id)
        .subscribe(response => {
          this.survey = response;
          console.log(response);

          this.surveyService.loadSurveyAnswers(response[0].title)
            .subscribe(answers => {
              this.answerList = answers;
              this.answerNumber = this.answerList.length;
              this.countAnswers();
            });
        }, error => {
          console.log(error);
        });
    });
  }

  countAnswers() {

  this.survey[0].question.forEach(question => {
      question.answer.forEach(item => {
        item.count = 0;
      });
    });

  for (let i = 0; i < this.survey[0].question.length; i++) {
    for (let j = 0; j < this.survey[0].question[i].answer.length; j++) {
      this.answerList.forEach(answerItem => {
        if (answerItem.question[i].answer === this.survey[0].question[i].answer[j].option) {
          this.survey[0].question[i].answer[j].count++;
        }
      });
    }
  }  console.log(this.survey);
  this.makeCharts();
  }


  makeCharts() {
    const questions = [];

    this.survey[0].question.forEach(item => {
      const question = {
      questionTitle: '',
      answerLabel: [],
      answerCount: [],
    };
      question.questionTitle = item.contents;
      item.answer.forEach(answer => {
        question.answerLabel.push(answer.option);
        question.answerCount.push(answer.count);
      });
      questions.push(question);
    });
    this.charts = questions;
    console.log(this.charts);
  }
}
