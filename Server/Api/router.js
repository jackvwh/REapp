import { Router } from 'express';
import homeRouter from './routes/home.router.js';
import feedbackRouter from './routes/feedback.router.js';
import surveyRouter from './routes/survey.router.js';
import questionRouter from './routes/question.router.js';
// import userRouter from "./routes/user.router";
// import chatRouter from "./routes/chat.router";
// import loginRouter from "./routes/login.router";
// import signupRouter from "./routes/signup.router";
// import calenderRouter from "./routes/calender.router";

export default Router()
  .get('/', homeRouter)
  .use('/feedback', feedbackRouter)
  .use('/surveys/', surveyRouter)
  .use('/questions', questionRouter);
