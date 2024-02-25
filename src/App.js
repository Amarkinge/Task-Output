import React from 'react';
import Table from './Table';
import jsonData from './data.json';
 

const App = () => {
  return (
    <div>
      <h1>Expandable Table with Multi-Selection</h1>
      <Table data={jsonData} />
    </div>
  );
};

export default App;
