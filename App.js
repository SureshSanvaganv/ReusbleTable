
import React from 'react';
import ReusableTable from './ReusableTable';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  
];

const data = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
  
];

function App() {
  return (
    <div>
      <h1>Reusable Table Component</h1>
      <ReusableTable columns={columns} data={data} />
    </div>
  );
}

export default App;