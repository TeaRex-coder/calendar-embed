import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import Height from "./components/Height";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Height maxHeight={725}>
        <Calendar />
      </Height>
    </div>
  );
}

export default App;
