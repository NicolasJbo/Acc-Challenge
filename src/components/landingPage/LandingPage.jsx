import Benefit from "../benefit/benefit";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import Workers from "../woloxWorker/workers";
import './LandingPage.css'

const LandingPage = () => {
return (<>
  <div className="container">
      <Navbar></Navbar>
      <Hero></Hero>
      <Workers></Workers>
      <Benefit></Benefit>
      <Footer></Footer> </div>
        </>
);
};

export default LandingPage;
