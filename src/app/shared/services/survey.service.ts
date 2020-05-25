import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SurveyService {
  constructor(private readonly http: HttpClient) {}

  url = 'http://localhost:3000/';
  addSurvey(data) {
    return this.http.post(this.url + 'survey', data);
  }
  getSurveys() {
    return this.http.get(this.url + 'survey');
  }
  getSurveyById(id) {
    return this.http.get(`${this.url}survey/${id}`);
  }
  getSurveyByEmail(email) {
    return this.http.get(`${this.url}survey/findByEmail/${email}`);
  }
  sendFilledSurvey(data) {
    return this.http.post(this.url + 'filled-survey', data);
  }
  loadSurveyAnswers(title) {
    return this.http.post(`${this.url}filled-survey/findByTitle`, { title });
  }
  deleteSurvey(id) {
    return this.http.delete(`${this.url}survey/${id}`);
  }
}
