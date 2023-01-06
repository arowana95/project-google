import logo from './logo.png';
import mini from './mini.jpg';

function App() {
  return (
    <>
    <div className="baseline" id="person">
    <a href="">Gmail</a>
    <a href="">Images</a>
    <span className="material-symbols-outlined">apps</span>
    <img src={mini} alt="" id="mini"/>
    </div>

    <div className="baseline" id="logo">
        <img src={logo} alt="Google"/>
    </div>

    <div className="baseline" id="bar">
    <label htmlFor="uncle"><span className="material-symbols-outlined" id="sear">search</span></label>
    <input type="text" id="uncle"/>
    <span className="material-symbols-outlined" id="mic">mic</span>
    </div>

    <div className="baseline" id="buttons">
  <button>Google Search</button>
  <button>I'm Feeling Lucky</button>
  </div>

  <div className="baseline" id="offer">
    <p>Google offered in: <a href="">English</a></p>
</div>

<div className="baseline" id="country">
    <p>England</p>
</div>

<div className="baseline" id="info">
    <div id="sub">
        <a href="">About</a>
        <a href="">Advertising</a>
        <a href="">Business</a>
        <a href="">How Search Works</a>
    </div>
    <div id="zero">
    <a href="">Privacy</a>
    <a href="">Terms</a>
    <a href="">Settings</a>
    </div>
  </div>
    </>
  )
}

export default App;