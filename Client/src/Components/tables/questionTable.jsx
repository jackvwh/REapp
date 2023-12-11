import React from 'react';
import RowRenderer from '../lists/rowRenderer';
import QuestionRow from './rows/questionRow';

export default function QuestionTable({ questionData }) {
  return (
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
  );
}
