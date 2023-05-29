import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Todos from './component/Todos';
import Showtodos from './component/Showtodos';
function App() {
  return (
    <div className="App">
      <Header/>
      <Todos/>
      <Showtodos/>
    </div>
  );
}

export default App;
