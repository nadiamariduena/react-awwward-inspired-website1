import React, { useEffect } from "react"; //for the change of the --vh in the banner 50vh
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";

function App() {
  useEffect(() => {
    // let vh be the window.innerHeight , multiplied by .01
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}
export default App;
