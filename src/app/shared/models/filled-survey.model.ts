export class FilledSurveyModel {
  title: string;
  question: {
    contents: string,
    answer: string
  }[];
  constructor() {}
}
