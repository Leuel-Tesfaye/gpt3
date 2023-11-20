// importing all the components
import "./App.css";
import "./components/article/Article";
import "./components/brand/Brand";
import Brand from "./components/brand/Brand";
import "./components/cta/Cta";
import Cta from "./components/cta/Cta";
import "./components/feature/Feature";
import Feature from "./components/feature/Feature";
import "./components/navbar/Navbar";
import Navbar from "./components/navbar/Navbar";

// importing components of the container
import "./containers/blog/Blog";
import Blog from "./containers/blog/Blog";
import "./containers/features/Features";
import "./containers/footer/Footer";
import Footer from "./containers/footer/Footer";
import "./containers/header/Header";
import Header from "./containers/header/Header";
import "./containers/possibility/Possibility";
import Possibility from "./containers/possibility/Possibility";
import "./containers/whatGPT3/WhatGPT3";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
