import React from "react";
import "./Home.css";
import "./SectionOneKeyFrames.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Best_Projects from "./BestProjects/Best_Projects";
import Cards from "./More_Projects/Cards";
import About from "./About";
import Comments from "./Comment/Comments";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";


const Home = () => {


  return (
    <section className="section">
      <Navbar />

      <Header />

      <Best_Projects />

      <Cards />

      <About />

      <Comments />

      <Contact />

      <Footer />

      {/* <div className="backUp">

      </div> */}
    </section>
  );
};

export default Home;
