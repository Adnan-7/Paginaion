import React from 'react';
import { useFetch } from './useFetch';

function App() {
  const { data, isLoading } = useFetch();
  console.log(data);
  return (
    <div>
      <h3>Pagination</h3>
    </div>
  );
}

export default App;
