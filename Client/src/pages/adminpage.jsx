import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import StatusBar from '../components/chat/statusbar';
import { ApiClient } from '../Api/ApiClient.js';
import SurveyRow from '../components/tables/rows/surveyRow';
import QuestionRow from '../components/tables/rows/questionRow';

export default function AdminPage() {
  // get survey list from server
  const [surveyList, setSurveyList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [isSurveyLoading, setIsSurveyLoading] = useState(false);
  const [isQuestionLoading, setIsQuestionLoading] = useState(false);

  useEffect(() => {
    getSurveyList();
    getQuestionList();
  }, []);

  function getSurveyList() {
    setIsSurveyLoading(true);
    ApiClient.get('surveys')
      .then(data => {
        setSurveyList(data);
        setIsSurveyLoading(false);
      })
      .catch(error => {
        console.error('Error fetching surveys:', error);
        setIsSurveyLoading(false);
      });
  }

  function getQuestionList() {
    setIsQuestionLoading(true);
    ApiClient.get('questions')
      .then(data => {
        setQuestionList(data);
        setIsQuestionLoading(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setIsQuestionLoading(false);
      });
  }

  function RowRenderer({ list, element: Element }) {
    return list.map((listItem, index) => {
      return <Element key={index} props={listItem} />;
    });
  }

  // Show loading indicator
  if (isSurveyLoading || isQuestionLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="">
      <StatusBar />
      {/* top navbar */}
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Administrator</a>
        </div>

        <div className="flex-1">
          <button
            className="btn btn-ghost btn-sm rounded-btn"
            onClick={getSurveyList}
          >
            Alle spørgeskemaer
          </button>
          <button
            className="btn btn-ghost btn-sm rounded-btn"
            onClick={getQuestionList}
          >
            Alle spørgsmål
          </button>
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

      {/* main content */}
      <section className="container">
        <menu className="">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">
                Åben menu
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Tilføj spørgsmål</a>
                </li>
                <li>
                  <a>Tilføj spørgeskema</a>
                </li>
                <li>
                  <a>Slet bruger</a>
                </li>
              </ul>
            </div>
          </div>
        </menu>

        <div className="flex justify-between px-4 py-16 bg-base-200">
          {/* Create survey section */}
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
                  {surveyList.length === 0 ? (
                    <tr>
                      <td colSpan="5">Ingen spørgeskemaer fundet</td>
                    </tr>
                  ) : (
                    <RowRenderer list={surveyList} element={SurveyRow} />
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
                  {questionList.length === 0 ? (
                    <tr>
                      <td colSpan="3">Ingen spørgsmål fundet</td>
                    </tr>
                  ) : (
                    <RowRenderer list={questionList} element={QuestionRow} />
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
