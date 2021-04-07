import './../styles/Home.css';
import Header from "./shared/Header.js";
import Intro from "./Intro.js";
import Continue from "./Continue.js";

function Home() {
  return (
    <div className="main">
      <Header />
      <Intro />
      <Continue />
    </div>
  );
}

export default Home;
