import './App.css';
import React, {useState} from 'react';
import UserList from './component/UserList';
import UserDetail from './component/UserDetail';

function App() {
  const [activeUserId, setActiveUserId] = useState(null)

  return (
    <div className="App">
      <div><UserList setActiveUserId = {setActiveUserId}/></div>

      {activeUserId && (
      <div><UserDetail activeUserId = {activeUserId}/></div>
      )}

    </div>
  );
}

export default App;
