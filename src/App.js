// import logo from './logo.svg';
import "./App.css";

// parrent Component 
function App() {
  return (
    <div>
      <User name='shahab' age={27}></User>
    </div>
  );
}

// Child Component
const User = (prop) => {
  return (
    <div>
      <h1>{prop.name}</h1>
      <h2>{prop.age}</h2>
    </div>
  );
};

export default App;
