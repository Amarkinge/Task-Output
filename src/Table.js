import React, { useState } from 'react';
import './Table.css'; // Import CSS file for styling

const Table = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  const toggleRowExpansion = (id) => {
    setExpandedRows((prevExpandedRows) => {
      if (prevExpandedRows.includes(id)) {
        return prevExpandedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevExpandedRows, id];
      }
    });
  };

  const isRowSelected = (id) => selectedRows.includes(id);
  const isRowExpanded = (id) => expandedRows.includes(id);

  const renderRows = (rows, depth = 0) => {
    return rows.map((row) => (
      <React.Fragment key={row.id}>
        <tr
          className={`row${depth % 2 === 0 ? ' even' : ' odd'}${isRowSelected(row.id) ? ' selected' : ''}`}
          onClick={() => handleRowClick(row.id)}
        >
          <td>{row.text1}</td>
          <td>{row.text2}</td>
        </tr>
        {row.children.length > 0 && isRowExpanded(row.id) && renderRows(row.children, depth + 1)}
      </React.Fragment>
    ));
  };

  const handleRowClick = (id) => {
    toggleRowSelection(id);
    toggleRowExpansion(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Text 1</th>
          <th>Text 2</th>
        </tr>
      </thead>
      <tbody>
        {data.rows.length > 0 && renderRows(data.rows)}
      </tbody>
    </table>
  );
};

export default Table;
