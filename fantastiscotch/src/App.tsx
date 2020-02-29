import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultRoutes from "./routes/DefaultRoutes";

function App() {
  return (
    <Router>
      <DefaultRoutes />
    </Router>
  );
}

export default App;
