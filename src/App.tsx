import * as React from "react";
import "./App.css";// 
import Hello from "./Hello";


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello name="Test" />
      </div>
    );
  }
}

export default App;
