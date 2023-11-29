import SurveyModel from '../Models/survey.model.js';
import QuestionModel from '../Models/question.model.js';

export default class testdataController {
  static async insertTestData(req, res) {
    questions.forEach(async question => {
      await QuestionModel.createOne(question.question, question.answerType);
    });
    surveys.forEach(async survey => {
      await SurveyModel.createOne(
        survey.surveyTitle,
        survey.description,
        survey.questions
      );
    });
    res.status(200).json({ message: 'Test data inserted successfully' });
  }
}
const questions = [
  {
    question: 'Do you enjoy working in a team environment?',
    answerType: 'boolean',
  },
  {
    question:
      'On a scale from 1 to 10, how would you rate your time management skills?',
    answerType: '1-10',
  },
  {
    question: 'What is your preferred method of communication in a workplace?',
    answerType: 'text',
  },
  {
    question: 'Have you ever worked on a remote project?',
    answerType: 'boolean',
  },
  {
    question: 'Rate your proficiency in programming languages from 1 to 10.',
    answerType: '1-10',
  },
  {
    question: 'What motivates you to achieve your goals?',
    answerType: 'text',
  },
  {
    question: 'Do you consider yourself adaptable to changing work environments?',
    answerType: 'boolean',
  },
  {
    question: 'How do you handle stress and pressure in your work?',
    answerType: 'text',
  },
  {
    question: 'On a scale of 1 to 10, how important is work-life balance for you?',
    answerType: '1-10',
  },
  {
    question: 'Do you prefer working in a structured or flexible work schedule?',
    answerType: 'boolean',
  },
];

const surveys = [
  {
    surveyTitle: 'Employee Satisfaction Survey',
    description:
      'Assessing overall employee satisfaction and workplace environment.',
    questions: ['1', '3', '5', '7'],
  },
  {
    surveyTitle: 'Customer Feedback Survey',
    description: 'Gathering feedback from customers on products and services.',
    questions: ['2', '4', '6', '8'],
  },
  {
    surveyTitle: 'Product Evaluation Survey',
    description: 'Evaluating the usability and satisfaction of our new product.',
    questions: ['1', '4', '6', '7'],
  },
  {
    surveyTitle: 'IT Services Survey',
    description: 'Understanding the effectiveness of internal IT support.',
    questions: ['2', '3', '5', '8'],
  },
  {
    surveyTitle: 'Health and Wellness Survey',
    description: 'Measuring employee health and wellness initiatives.',
    questions: ['1', '2', '3', '4'],
  },
  {
    surveyTitle: 'Remote Work Experience Survey',
    description: "Exploring employees' experiences and challenges with remote work.",
    questions: ['5', '6', '7', '8'],
  },
  {
    surveyTitle: 'Training Needs Assessment',
    description: 'Identifying areas for employee training and development.',
    questions: ['1', '3', '5', '8'],
  },
  {
    surveyTitle: 'Client Onboarding Feedback',
    description: 'Feedback on the client onboarding process for improvement.',
    questions: ['2', '4', '6', '7'],
  },
  {
    surveyTitle: 'Website User Experience Survey',
    description: 'Gauging user experience and satisfaction with our website.',
    questions: ['1', '3', '7', '8'],
  },
  {
    surveyTitle: 'Event Evaluation Survey',
    description: 'Collecting feedback on the event organization and content.',
    questions: ['2', '4', '5', '6'],
  },
];
