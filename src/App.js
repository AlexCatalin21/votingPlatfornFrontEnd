import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/layout/Home"
import AppNavbar from "./components/layout/AppNavbar";
import { Switch, Route } from "react-router-dom";
import AddCandidatesCampaign from "./components/service/AddCandidatesCampaign";
import AddTopicsCampaign from "./components/service/AddTopicsCampaign";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add-candidates-campaign" component={AddCandidatesCampaign}></Route>
        <Route path="/add-topics-campaign" component={AddTopicsCampaign}></Route>
      </Switch>
    </div>
  );
}

export default App;
