import '../styles/index.css';
import StatusBar from '../components/chat/statusbar';
import SurveyRow from '../components/tables/rows/surveyRow';
import QuestionRow from '../components/tables/rows/questionRow';
import SurveyForm from '../components/forms/surveyForm.jsx';
import SurveyQuestionForm from '../components/forms/surveyQuestionForm.jsx';
import { useApiClient } from '../Hooks/useApiClient.js';
import RowRenderer from '../components/lists/rowRenderer.jsx';

export default function AdminPage() {
  // get survey list from server
  const {
    data: surveyData,
    loading: surveyLoading,
    error: surveyError,
  } = useApiClient.useGet('surveys');

  // get question list from server
  const {
    data: questionData,
    loading: questionLoading,
    error: questionError,
  } = useApiClient.useGet('questions');

  if (surveyLoading || questionLoading) {
    return <div>Loading...</div>;
  }
  if (surveyError || questionError) {
    return <div>Error loading </div>;
  }

  return (
    <main className="">
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
          <SurveyQuestionForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
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
        <menu>
          <div className="drawer drawer-end z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                Åben menu
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById('question-modal').showModal()
                    }>
                    Opret nyt spørgsmål
                  </button>
                </li>
                <li>
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById('survey-modal').showModal()
                    }>
                    Opret spørgeskema
                  </button>
                </li>
                <li>
                  <a>Slet bruger</a>
                </li>
              </ul>
            </div>
          </div>
        </menu>

        <div className="flex justify-between px-4 py-16 bg-base-200">
          <section id="survey-table" className="card w-100 bg-base-100 shadow-xl">
            <div className="overflow-x-auto">
              {' '}
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Spørgeskema</th>
                    <th>Beskrivelse</th>
                    <th>Lavet den</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {surveyData && surveyData.length === 0 ? (
                    <tr>
                      <td colSpan="5">Ingen spørgeskemaer fundet</td>
                    </tr>
                  ) : (
                    <RowRenderer list={surveyData} element={SurveyRow} /> || (
                      <div>loading...</div>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
          {/* survey section */}
          <section id="question-table" className="card w-96 bg-base-100 shadow-xl">
            <div className="overflow-x-auto">
              {' '}
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Spørgsmål</th>
                    <th>Svar type</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {questionData && questionData.length === 0 ? (
                    <tr>
                      <td colSpan="3">Ingen spørgsmål fundet</td>
                    </tr>
                  ) : (
                    <RowRenderer list={questionData} element={QuestionRow} /> || (
                      <div>loading...</div>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
