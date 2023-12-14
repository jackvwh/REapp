import '../Styles/index.css';
import { useApiClient } from '../Hooks/useApiClient.js';
import StatusBar from '../Components/chat/statusbar.jsx';
import SurveyForm from '../Components/forms/surveyForm.jsx';
import QuestionForm from '../Components/forms/questionForm.jsx';
import QuestionTable from '../Components/tables/questionTable.jsx';
import SurveyTable from '../Components/tables/surveyTable.jsx';
import MenuDrawer from '../Components/globals/menu-drawer.jsx';

export default function AdminPage() {
  // get survey list from server
  const {
    data: surveyData,
    loading: surveyLoading,
    error: surveyError,
  } = useApiClient.useGet('/surveys');

  // get question list from server
  const {
    data: questionData,
    loading: questionLoading,
    error: questionError,
  } = useApiClient.useGet('/questions');

  if (surveyLoading || questionLoading) {
    return <div>Loading...</div>;
  }
  if (surveyError || questionError) {
    return <div>Error loading </div>;
  }

  return (
    <main className="">
      <StatusBar />
      {/* top navbar */}
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Administrator</a>
        </div>

        <div className="flex justify-between gap-2">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>Forside</a>
              </li>
              <li>
                <a>Brugerprofil</a>
              </li>
              <li>
                <a>Indstillinger</a>
              </li>
            </ul>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </nav>

      <section className="container">
        <MenuDrawer />
        <div className="flex justify-between px-4 py-16 bg-base-200">
          {/* surveys section */}
          <SurveyTable surveyData={surveyData} />
          {/* question section */}
          <QuestionTable questionData={questionData} />
        </div>
      </section>
      {/* survey modal */}
      <dialog id="survey-modal" className="modal">
        {/* Survey form */}
        <SurveyForm questionData={questionData} />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* question modal */}
      <dialog id="question-modal" className="modal">
        <div className="modal-box">
          {/* Question form */}
          <QuestionForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  );
}
