import Cybersecurity from "../components/Cybersecurity";
import Dataservices from "../components/Dataservices";
import Navbar from "../components/Navbar";
import Dashboard, { Partners } from "../components/Partners";
import Toppage from "../components/Toppage";

function Homepage(props) {
  return (
    <div>
      <Navbar />
      <Toppage />
      <Dashboard />
      <Partners />
      <Dataservices />
      <Cybersecurity />
    </div>
  );
}
export default Homepage;
