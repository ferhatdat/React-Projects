import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import data from './helper/Data';
import './app.css'


function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <Card veri={data} />
    </div>
  );
}

export default App;
