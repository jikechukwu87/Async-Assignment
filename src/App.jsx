import { useState, useEffect } from 'react'





import './App.css'

function App() {


  const [users, setUsers] = useState([]);
  

  const fetchData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=20");

      const data = await res.json();

      setUsers(data.results);
    } catch (error) {
      console.log("error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Async Assignment</h1>
      {users.length ? (
        users.map((user) => (
          <div className='userbox' key={user.id.value}>
            <h2>
              {user.name.first} {user.name.last}
            </h2>
            <h3>{user.email}</h3>
            <h3>{user.gender}</h3>
            
            
          </div>
        ))
      ) : (
        <h4>No user available</h4>
      )}
    </>
  );

}

export default App
