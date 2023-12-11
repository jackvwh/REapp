import React from 'react';
import RowRenderer from '../lists/rowRenderer';
import SurveyRow from './rows/surveyRow';

export default function SurveyTable({ surveyData }) {
  return (
    <section id="survey-table" className="card w-100 bg-base-100 shadow-xl">
      <div className="overflow-x-auto">
        {' '}
        <table className="table">
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
  );
}
