import "./App.css";
import AllFiles from "./Components/AllFiles";
import Sidebar from "./Components/Sidebar";

// const items = [
//   {
//     title: "What is Poop",
//     content: "Stinky stuff",
//   },
//   {
//     title: "Why Poop",
//     content: "Poop poison is bad",
//   },
//   {
//     title: "How do you use Poop",
//     content: "We use poop to fertilize",
//   },
// ];

const sidebarItems = [
  {
    name: "Dashboard",
  },
  {
    name: "All Files",
  },
  {
    name: "Projects",
  },
  {
    name: "Recent Uploads",
  },
  {
    name: "Payments",
  },
  {
    name: "Profile",
  },
];

const fileItems = [
  {
    name:
      "Really big long name that will take up space because it's a long nameeeeeeee",
    type: "wav",
    sharing: "Public, Private, Friends",
    size: "869mb",
    date: "Feb 28th 2021",
  },
  {
    name: "2",
    type: "mp3",
    sharing: "Public",
    size: "80mb",
    date: "Feb 21th 2021",
  },
  {
    name: "3",
    type: "flac",
    sharing: "Public",
    size: "107mb",
    date: "Mar 2nd 2021",
  },
  {
    name: "four",
    type: "wav",
    sharing: "Public",
    size: "160mb",
    date: "Apr 11th 2021",
  },
  {
    name: "5",
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
            <AllFiles fileItems={fileItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
