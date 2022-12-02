import Intro from "./Intro";
import "./Home.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

function Home() {

  return (
    <div className="container">
      <Navbar />
      <Intro />
      <Body />
      <Footer />
    </div>
  )
}

export default Home;