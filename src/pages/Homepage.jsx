import About from "../components/About";
import Cybersecurity from "../components/Cybersecurity";
import Dataservices from "../components/Dataservices";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Dashboard, { Partners } from "../components/Partners";
import Toppage from "../components/Toppage";
import Work from "../components/Work";

function Homepage(props) {
  return (
    <div>
      <Navbar />
      <Toppage />
      <Dashboard />
      <Partners />
      <Dataservices />
      <Cybersecurity />
      <About/>
      <Work/>
      <Footer/>
    </div>
  );
}
export default Homepage;
