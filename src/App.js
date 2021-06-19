import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Components/login";

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
             <Route exact path="/">
                 <Login />
             </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
