import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SessionService} from '../../shared/services/session.service';
import {SurveyService} from '../../shared/services/survey.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

  surveyForm: FormGroup;

  selectedOption = [];

  editMode = false;

  questions = [
    { value: 'Single choice', viewValue: 'Single choice' }
  ];


  constructor(private readonly router: Router,
              private readonly sessionService: SessionService,
              private surveyService: SurveyService,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.initForm();

  }

  private initForm() {
    const surveyTitle = '';
    const surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({
      'surveyTitle': new FormControl(surveyTitle, [Validators.required]),
      'surveyQuestions': surveyQuestions,
    });

    this.onAddQuestion();

  }

  onAddQuestion() {
    console.log(this.surveyForm);

    const surveyQuestionItem = new FormGroup({
      'questionTitle': new FormControl('', Validators.required),
      'questionType': new FormControl('', Validators.required),
      'questionGroup': new FormGroup({})
    });

    (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);

  }

  onRemoveQuestion(index) {


    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

    (<FormArray> this.surveyForm.get('surveyQuestions')).removeAt(index);
    this.selectedOption.splice(index,1);

  }


  onSeletQuestionType(questionType, index) {
    if (questionType === 'Single choice' || questionType === 'Multi choice') {
      this.addOptionControls(questionType, index);
    }
  }

  addOptionControls(questionType, index) {

    const options = new FormArray([]);
    const showRemarksBox = new FormControl(false);


    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);

    this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));

    this.addOption(index);
    this.addOption(index);
  }


  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }


  addOption(index) {
    const optionGroup = new FormGroup({
      'optionText': new FormControl('', Validators.required),
    });
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
  }

  onSubmit() {
    const questions = [];

    this.surveyForm.value.surveyQuestions
      .forEach(item => {
        const options = [];
        item.questionGroup.options.forEach(option => {
          options.push({
            option: option.optionText
          });
        });
        questions.push(
          {
            type: item.questionType,
            contents: item.questionTitle,
            answer: options
          });
      });

    const sur = this.surveyForm.value;
    const survey = {
      title: sur.surveyTitle,
      email: this.sessionService.getEmail(),
      question: questions
    };
    this.surveyService.addSurvey(survey)
      .subscribe(response => {
        this.snackBar.open('Dodano ankietę!', 'Sukces', {duration: 5000});
      });
    this.router.navigate(['dashboard']);
  }
}
