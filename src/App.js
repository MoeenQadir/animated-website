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

   </>
  );
}

export default App;
