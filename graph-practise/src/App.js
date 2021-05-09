import logo from './logo.svg';
import './App.css';
import Stock from './components/Stock';
import Linechart from './components/Linechart';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import BarChart from './components/BarChart';
import Dough from './components/Dough';
function App() {
  return (
    <div className="App">
     <Router>
    <Switch>
      <Route exact path="/">
      <div className="stock">
     <Stock/>
     </div>
      </Route>
       <Route path="/line">
       <div className="chart">
       <Linechart/>
     </div>
       </Route>
       <Route path="/bar">
       <div className="bar">
       <BarChart/>
     </div>
       </Route>
       <Route path="/dough">
       <div className="dough">
       <Dough/>
     </div>
       </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
