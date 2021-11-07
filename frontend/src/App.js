import './App.css';
import MyComponent from "./components/MyComponent.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent /> {/* calls the component for firstname and lastname */}
      </header>
    </div>
  );
}

export default App;
