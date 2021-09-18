import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2><code>MongoDB</code></h2>
        <h2><code>Express</code></h2>
        <h2><code>React / Nginx</code></h2>
        {/* <h2><code>Node</code></h2> */}
        <h2><code>Traefik</code></h2>
        <h2><code>Docker</code></h2>
        <a
          className="App-link"
          href="https://github.com/TurtleWolfe/devOps"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
      </header>
    </div>
  );
}

export default App;
