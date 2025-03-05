import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css";
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/* intro start */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* intro end */}

      {/* trending start */}
      <div className="trending">
        <Trending />
      </div>
      {/* trending end */}

      {/* superhero start */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* superhero end */}
    </div>
  )
}

export default App;