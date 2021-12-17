import React, { useState, useEffect } from 'react';
import Follower from './Follower';
import { useFetch } from './useFetch';

function App() {
  const { data, isLoading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    setFollowers(data[page]);
  }, [isLoading]);

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
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
