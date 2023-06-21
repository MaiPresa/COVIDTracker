import './App.css';
import { DropdownComponent } from './components/tracker/dropdownComponent/DropdownComponent';
import { PruebaTarjeta } from './components/tracker/pruebaTarjeta/PruebaTarjeta';


function App() {
  return (
    <div className="App">
      <DropdownComponent />
      <PruebaTarjeta id="cases" title="Total Cases" />
    </div>
  );
}

export default App;
