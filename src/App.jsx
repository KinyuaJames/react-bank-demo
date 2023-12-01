import { useState } from "react";
import styles from "./styles";
import "./index.css";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
// import "./App.css";

function App() {
  return (
    <>
      <div className="cursor-pointer overflow-hidden">
        <div className={` ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business /> <Billing /> <CardDeal /> <Testimonials /> <Clients />{" "}
            <CTA /> <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
