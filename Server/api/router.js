import { Router } from 'express';
import userRouter from './routes/user.router.js';
// import homeRouter from "./routes/home.router";
// import userRouter from "./routes/user.router";
// import chatRouter from "./routes/chat.router";
// import loginRouter from "./routes/login.router";
// import signupRouter from "./routes/signup.router";
// import calenderRouter from "./routes/calender.router";
// import surveyRouter from "./routes/survey.router";

export default Router()
  //   .use("/", homeRouter)
  .use('/user', userRouter);
//   .use("/chat", chatRouter);
//   .use("/login", loginRouter);
//   .use("/signup", signupRouter);
//   .use("/calender", calenderRouter);
//   .use("/survey", surveyRouter);
