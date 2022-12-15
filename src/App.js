import React from "react";
import "./style.scss"
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  React.useEffect(() => {
    Aos.init(
      
    );
  }, [])
  return(
    <div className="App">
      
        <h1>FADE</h1>
        
        <div data-aos="fade-down"></div>
        <div data-aos="fade-right"></div>
        <div data-aos="fade-left"></div>
        <div data-aos="fade-up-right"></div>
        <div data-aos="fade-up-left"></div>
        <div data-aos="fade-down-right"></div>
        <div data-aos="fade-down-left"></div>
        <section className="up">
          <div data-aos="fade-up" data-aos-delay="" data-aos-duration="1000"></div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"></div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"></div>
        </section>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-delay="400"
     data-aos-duration="500">
      </div>
      <div data-aos="fade-up"
      data-aos-delay="400"
     data-aos-anchor-placement="top-bottom">
</div>
        <h1>FLIP</h1>
        <div data-aos="flip-left"></div>
        <div data-aos="flip-right"></div>
        <div data-aos="flip-up"></div>
        <div data-aos="flip-down"></div>
        
     
        <h1>ZOOM</h1>
        <div data-aos="zoom-in"></div>
        <div data-aos="zoom-in-up"></div>
        <div data-aos="zoom-in-down"></div>
        <div data-aos="zoom-out"></div>
      
    </div>

  )
}

export default App;