import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Section from "./components/section/section";
import Navbar from "./components/navbar/navbar";
import Aside from "./components/aside/aside";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <div className="container-main">
        <Section />
        <Aside />
      </div>
      <div className="Home__section-info">
        <p>Columnistas</p>
        <p>bla bla bla</p>
      </div>
      <Footer />
    </div>
  );
}
export default App;
