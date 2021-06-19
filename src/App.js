import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Components/login";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
             <Route exact path="/">
                 <Login />
             </Route>
             <Route exact path="/home">
                 <Header />
                 <Home />
             </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
