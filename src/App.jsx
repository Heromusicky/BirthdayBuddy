import { useState } from 'react';
import people from './data';
import List from './List';

const App = () => {
  const clearList = () => {
    setUser([]);
  };
  const [user, setUser] = useState(people);

  return (
    <main>
      <div className="container">
        <h3> {user.length} Birthday Today</h3>
        <List user={user} />
        <button  className={'btn btn-block'}onClick={clearList}> Clear List</button>
      </div>
    </main>
  );
};
export default App;
