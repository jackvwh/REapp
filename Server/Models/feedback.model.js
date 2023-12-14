import query from '../Db/query.js';

export default class FeedbackModels {
  static async getAllFeedbacks() {
    const sql = `
    SELECT 
        feedback.*,
        surveys.*,
        questions.*,            
        answers.*
    FROM 
        feedback 
        LEFT JOIN surveys ON feedback.survey_id = surveys.survey_id
        LEFT JOIN answers ON answers.feedback_id = feedback.feedback_id 
        LEFT JOIN questions ON answers.question_id = questions.question_id
          `;
    try {
      const result = await query(sql);
      // convert the result to an array of objects
      const feedbacks = [];
      while (result.length > 0) {
        const feedback = {
          feedback_id: result[0].feedback_id,
          survey_id: result[0].survey_id,
          profile_id: result[0].profile_id,
          created_at: result[0].created_at,
          answers: [],
        };

        while (result.length > 0 && result[0].feedback_id === feedback.feedback_id) {
          const answer = {
            answer_id: result[0].answer_id,
            question_id: result[0].question_id,
            answer_text: result[0].answer_text,
            answer_value: result[0].answer_value,
            answer_bool: result[0].answer_bool,
            question: {
              question_id: result[0].question_id,
              question_text: result[0].question_text,
              answer_type: result[0].answer_type,
              combined_at: result[0].combined_at,
            },
          };

          feedback.answers.push(answer);
          result.shift();
        }

        feedbacks.push(feedback);
      }
      return feedbacks;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAllFeedbacksFromOneProfile(userId) {
    const sql = `
    SELECT 
        feedback.*,
        surveys.*,
        questions.*,
        answers.*
    FROM 
        feedback 
        LEFT JOIN surveys ON feedback.survey_id = surveys.survey_id
        LEFT JOIN answers ON answers.feedback_id = feedback.feedback_id 
        LEFT JOIN questions ON answers.question_id = questions.question_id
    WHERE 
        feedback.profile_id = ?;
          `;
    try {
      const result = await query(sql, userId);
      // convert the result to an array of objects
      const feedbacks = [];
      while (result.length > 0) {
        const feedback = {
          feedback_id: result[0].feedback_id,
          survey_id: result[0].survey_id,
          profile_id: result[0].profile_id,
          created_at: result[0].created_at,
          answers: [],
        };

        while (result.length > 0 && result[0].feedback_id === feedback.feedback_id) {
          const answer = {
            answer_id: result[0].answer_id,
            question_id: result[0].question_id,
            answer_text: result[0].answer_text,
            answer_value: result[0].answer_value,
            answer_bool: result[0].answer_bool,
            question: {
              question_id: result[0].question_id,
              question_text: result[0].question_text,
              answer_type: result[0].answer_type,
              combined_at: result[0].combined_at,
            },
          };

          feedback.answers.push(answer);
          result.shift();
        }

        feedbacks.push(feedback);
      }
      return feedbacks;
    } catch (error) {
      throw new Error(error);
    }
  }
  static async getOneFeedbackFromOneProfile(feedbackId) {
    const sql = `
      SELECT 
          feedback.*,             -- Selects only required columns from feedback table
          surveys.*,              -- Selects only required columns from surveys table
          questions.*,            -- Selects only required columns from questions table
          answers.*               -- Selects only required columns from answers table
      FROM 
          feedback 
          LEFT JOIN surveys ON feedback.survey_id = surveys.survey_id
          LEFT JOIN answers ON answers.feedback_id = feedback.feedback_id 
          LEFT JOIN questions ON answers.question_id = questions.question_id
      WHERE feedback.feedback_id = ?;
        
      `;
    try {
      const result = await query(sql, [feedbackId]);

      // convert the result to an array of objects
      const feedback = {
        feedback_id: result[0].feedback_id,
        survey_id: result[0].survey_id,
        profile_id: result[0].profile_id,
        created_at: result[0].created_at,
        answers: [],
      };

      while (result.length > 0) {
        const answer = {
          answer_id: result[0].answer_id,
          question_id: result[0].question_id,
          answer_text: result[0].answer_text,
          answer_value: result[0].answer_value,
          answer_bool: result[0].answer_bool,
          question: {
            question_id: result[0].question_id,
            question_text: result[0].question_text,
            answer_type: result[0].answer_type,
            combined_at: result[0].combined_at,
          },
        };

        feedback.answers.push(answer);
        result.shift();
      }

      return feedback;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async createFeedback(userMail, surveyTitle) {
    const sql = `
      START TRANSACTION;

      INSERT INTO feedback (profile_id, survey_id)
      VALUES (
        (SELECT profile_id FROM user_profiles WHERE email = ?),
        (SELECT survey_id FROM surveys WHERE survey_title= ?)
      );
          
      COMMIT;`;
    try {
      const result = await query(sql, [userMail, surveyTitle]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteFeedback(feedback_id) {
    const sql = `
        
      START TRANSACTION;

      DELETE FROM answers WHERE feedback_id = ?;
  
      DELETE FROM feedbacks WHERE feedback_id = ?;
  
      COMMIT;
    `;

    try {
      const result = await query(sql, feedback_id);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async insertFeedbackAnswers(feedbackId, answers) {
    const sql = `
      
      INSERT INTO answers (feedback_id, question_id, answer_text, answer_value, answer_bool)
      VALUES ?;
      `;
    try {
      // Prepare the data for bulk insert
      const values = answers.map(answer => [
        feedbackId,
        answer.questionId,
        answer.answerText,
        answer.answerValue,
        answer.answerBool,
      ]);

      // Perform the bulk insert
      const result = await query(sql, [values]);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
