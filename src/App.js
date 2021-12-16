import React from 'react';
import Follower from './Follower';
import { useFetch } from './useFetch';

function App() {
  const { data, isLoading } = useFetch();
  console.log(data);

  if (isLoading) {
    return (
      <main>
        <div className='section-title'>
          <h1>Loading...</h1>
          <div className='underline'></div>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className='section-title'>
        <h1>{isLoading ? 'Loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>

      <section className='followers'>
        <div className='container'>
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
