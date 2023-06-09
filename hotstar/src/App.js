import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
