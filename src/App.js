import "./App.css";
import { Route, withRouter } from "react-router-dom";
import AllFiles from "./Components/AllFiles/AllFiles";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import Projects from "./Components/Projects/Projects";
import Profile from "./Components/Profile/Profile";
import RecentUploads from "./Components/RecentUploads/RecentUploads";
import Payments from "./Components/Payments/Payments";

const sidebarItems = [
  {
    name: "Dashboard",
    path: "dashboard",
  },
  {
    name: "All Files",
    path: "allfiles",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Recent Uploads",
    path: "recentuploads",
  },
  {
    name: "Payments",
    path: "payments",
  },
  {
    name: "Profile",
    path: "profile",
  },
];

const fileItems = [
  {
    name:
      "Really big long name that will take up space because it's a big long nameeeeeeeeeee",
    type: "wav",
    sharing: "Public, Private, Friends",
    size: "869mb",
    date: "Feb 28th 2021",
  },
  {
    name: "This one isn't too big",
    type: "mp3",
    sharing: "Public",
    size: "80mb",
    date: "Feb 21th 2021",
  },
  {
    name: "Short",
    type: "flac",
    sharing: "Public",
    size: "107mb",
    date: "Mar 2nd 2021",
  },
  {
    name: "A longer name but not as long as the other one",
    type: "wav",
    sharing: "Public",
    size: "160mb",
    date: "Apr 11th 2021",
  },
  {
    name: "Another longer name because we wanna see it",
    type: "zip",
    sharing: "Public",
    size: "1000mb",
    date: "Jan 1st 2021",
  },
];

const App = () => {
  return (
    <div className="app">
      <Sidebar sidebarItems={sidebarItems} />
      <div className="mainPage">
        <div className="mainField">
          <div className="page">
            <Route path="/allfiles">
              <AllFiles fileItems={fileItems} />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/recentuploads">
              <RecentUploads />
            </Route>
            <Route path="/payments">
              <Payments />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
