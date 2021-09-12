import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is a Docker Compose Demo Page.</h1>
        <p>This content is being served by an <code>Nginx</code> container.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
