import './App.css';
import Header from "./component/Header";
import Hero from "./component/Hero";
import Platforms from "./component/Platforms";
import Contributers from "./component/Contributers";
import Privacy from "./component/Privacy";
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of animation (in milliseconds)
            easing: 'ease', // Easing type
            once: true // Whether animation should only happen once while scrolling down
            // You can configure other options as per your requirement
        });
    }, []);
    return (
   <>
       <Header/>
       <Hero/>
       <Platforms/>
       <Contributers/>
       <Privacy/>
       <div id="background-wrap " className={"z-20"}>
           <div className="bubble x1"></div>
           <div className="bubble x3"></div>
           <div className="bubble x5"></div>
           <div className="bubble x7"></div>
           <div className="bubble x8"></div>
           <div className="bubble x10"></div>
       </div>
   </>
  );
}

export default App;
