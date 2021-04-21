import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/layout/Home"
import AppNavbar from "./components/layout/AppNavbar";
import { Switch, Route } from "react-router-dom";
import AddCandidatesCampaign from "./components/service/AddCandidatesCampaign";
import AddTopicsCampaign from "./components/service/AddTopicsCampaign";
import Register from "./components/service/Register";
import Login from "./components/service/Login";
import Logout from "./components/service/Logout";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add-candidates-campaign" component={AddCandidatesCampaign}></Route>
        <Route path="/add-topics-campaign" component={AddTopicsCampaign}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/logout" component={Logout}></Route>
      </Switch>
    </div>
  );
}

export default App;
