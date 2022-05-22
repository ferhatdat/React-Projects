import Contacts from './components/Contacts'
import Form from './components/Form';
import FireContextProvider from './context/FireContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <FireContextProvider>
      <div className="App">
        <Form />
        <Contacts />
        <ToastContainer />
      </div>
    </FireContextProvider>
  );
}

export default App;
