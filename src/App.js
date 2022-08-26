import logo from "./logo.svg";
import "./App.css";
// import Greeting from "./components/pure/Greeting";
// import GreetingFun from "./components/pure/GreetingFun";
// import TaskList from "./components/container/task_list";
import ComponentA from "./components/exercise/sesion-1-2-3/componentA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="David" /> */}
        {/* <GreetingFun name="Paula" /> */}
        {/* <TaskList /> */}
        <ComponentA />
      </header>
    </div>
  );
}

export default App;
