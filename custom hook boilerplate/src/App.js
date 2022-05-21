import logo from './logo.svg';
import './App.css';
import useFetch from './hook/useFetch';
import { useEffect } from 'react';


function App() {
  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')
  console.log(data, loading, error);
  
  return (
    <div className="App">
     <h1>CustomHook</h1>
     {
       data?.map(item => 
        <div>
          <h2>{item.title}</h2>
        </div>
        )
     }
     {loading && <p>Loading</p>}
     {error && <p>{error}</p>}
    </div>
  );
}

export default App;
