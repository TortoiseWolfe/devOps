import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1><code>React</code> <code>Nginx</code> <code>Docker</code></h1>
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
