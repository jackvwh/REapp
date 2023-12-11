import React from 'react';

export default function RowRenderer({ list, element: Element }) {
  return list && list.length > 0 ? (
    list.map((listItem, index) => <Element key={index} props={listItem} />)
  ) : (
    <tr>
      <td colSpan="5">Ingen data fundet</td>
    </tr>
  );
}
