import SurveyModel from '../Models/survey.model.js';
import QuestionModel from '../Models/question.model.js';
import FeedbackModels from '../Models/feedback.model.js';
import ActivityModels from '../Models/activity.model.js';
import UserModels from '../Models/users.models.js';
import PrivilegeModels from '../Models/privilige.models.js';

export default class testdataController {
  static async insertTestData(req, res) {
    await Promise.all(
      priviliges.map(privilige => PrivilegeModels.insertPrivilege(privilige))
    );
    //TODO:Please god dont let this break with the return profile_Id change in 
    await Promise.all(
      users.map(user =>
        UserModels.createUser(
          user.username,
          user.password,
          user.first_name,
          user.last_name,
          user.email,
          user.birthdate,
          user.privilege
        )
      )
    );

    await Promise.all(
      questions.map(question =>
        QuestionModel.createOne(question.question, question.answerType)
      )
    );

    await Promise.all(
      surveys.map(survey =>
        SurveyModel.createOne(
          survey.surveyTitle,
          survey.description,
          survey.questions
        )
      )
    );

    FeedbackModels.createFeedback(
      'john.doe@example.com',
      'Employee Satisfaction Survey'
    );
    FeedbackModels.createFeedback(
      'alice.smith@example.com',
      'Customer Feedback Survey'
    );

    await FeedbackModels.insertFeedbackAnswers(1, answers1);
    await FeedbackModels.insertFeedbackAnswers(2, answers2);

    await Promise.all(
      activities.map(activity =>
        ActivityModels.insertActivity(
          activity.activityType,
          activity.activityDescription
        )
      )
    );
    res.status(200).json({ message: 'Test data inserted successfully' });
  }
}

// TEST DATA SET
const priviliges = [
  { title: 'user', privilige: 'read, write' },
  { title: 'admin', privilige: 'read, write, delete' },
];
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
const answers1 = [
  {
    questionId: '1',
    answerText: null,
    answerValue: null,
    answerBool: true,
  },
  {
    questionId: '2',
    answerText: null,
    answerValue: '4',
    answerBool: null,
  },
  {
    questionId: '4',
    answerText: null,
    answerValue: null,
    answerBool: false,
  },
  {
    questionId: '6',
    answerText: 'no not at all i am weak',
    answerValue: null,
    answerBool: null,
  },
];
const answers2 = [
  {
    questionId: '10',
    answerText: null,
    answerValue: null,
    answerBool: true,
  },
  {
    questionId: '9',
    answerText: null,
    answerValue: '4',
    answerBool: null,
  },
  {
    questionId: '7',
    answerText: null,
    answerValue: null,
    answerBool: false,
  },
  {
    questionId: '8',
    answerText: 'no not at all i am weak',
    answerValue: null,
    answerBool: null,
  },
];
const activities = [
  {
    activityType: 'Fodbold',
    activityDescription: 'Tosser der løber efter en bold',
  },
  {
    activityType: 'Basketball',
    activityDescription: 'Sport med en bold og en kurv',
  },
  {
    activityType: 'Tennis',
    activityDescription: 'En sport med en bold og en tennisketsjer',
  },
  {
    activityType: 'Hockey',
    activityDescription: 'Sport med en puck og en isbane',
  },
  {
    activityType: 'Svømning',
    activityDescription: 'Sport i vandet med forskellige stilarter',
  },
  {
    activityType: 'Baseball',
    activityDescription: 'Sport med en bold og en baseball-kølle',
  },
  {
    activityType: 'Golf',
    activityDescription: 'Sport med en bold og en golfkølle',
  },
  {
    activityType: 'Badminton',
    activityDescription: 'Sport med en fjerbold og ketsjer',
  },
  {
    activityType: 'Volleyball',
    activityDescription: 'Sport med en bold over et net',
  },
  {
    activityType: 'Atletik',
    activityDescription: 'Forskellige sportsdiscipliner som løb, spring og kast',
  },
];
const users = [
  {
    username: 'user1',
    password: 'abcde',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    birthdate: '1990-01-15',
    privilege: 2,
  },
  {
    username: 'user2',
    password: 'abcde',
    first_name: 'Alice',
    last_name: 'Smith',
    email: 'alice.smith@example.com',
    birthdate: '1985-05-20',
    privilege: 2,
  },
  {
    username: 'user3',
    password: 'abcde',
    first_name: 'Ella',
    last_name: 'Johnson',
    email: 'ella.johnson@example.com',
    birthdate: '1993-11-30',
    privilege: 2,
  },
  {
    username: 'user4',
    password: 'abcde',
    first_name: 'Michael',
    last_name: 'Brown',
    email: 'michael.brown@example.com',
    birthdate: '1988-07-12',
    privilege: 2,
  },
  {
    username: 'user5',
    password: 'abcde',
    first_name: 'Olivia',
    last_name: 'Wilson',
    email: 'olivia.wilson@example.com',
    birthdate: '1996-03-25',
    privilege: 2,
  },
  {
    username: 'user6',
    password: 'abcde',
    first_name: 'James',
    last_name: 'Lee',
    email: 'james.lee@example.com',
    birthdate: '1982-09-05',
    privilege: 2,
  },
  {
    username: 'user7',
    password: 'abcde',
    first_name: 'Ava',
    last_name: 'Anderson',
    email: 'ava.anderson@example.com',
    birthdate: '1991-12-08',
    privilege: 2,
  },
  {
    username: 'user8',
    password: 'abcde',
    first_name: 'William',
    last_name: 'Garcia',
    email: 'william.garcia@example.com',
    birthdate: '1987-04-17',
    privilege: 2,
  },
  {
    username: 'user9',
    password: 'abcde',
    first_name: 'Sophia',
    last_name: 'Martinez',
    email: 'sophia.martinez@example.com',
    birthdate: '1994-06-03',
    privilege: 2,
  },
  {
    username: 'user10',
    password: 'abcde',
    first_name: 'Liam',
    last_name: 'Robinson',
    email: 'liam.robinson@example.com',
    birthdate: '1989-10-22',
    privilege: 1,
  },
];
