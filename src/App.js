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
import CampaignList from "./components/layout/CampaignList";
import Campaign from "./components/layout/Campaign"
import Footer from "./components/layout/Footer";
import MyCampaigns from './components/layout/MyCampaigns'

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
        <Route path="/campaigns" component={CampaignList}></Route>
        <Route path="/campaign-detail/:id" component={Campaign}></Route>
        <Route path="/my-campaigns" component={MyCampaigns}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
