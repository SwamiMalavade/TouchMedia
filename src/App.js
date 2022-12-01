import "./App.css";
import Follow from "./app/components/Follow";
import Register from "./app/components/Register";
import Users from "./app/components/Users";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container my-3">
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />

          <Route exact path="/follow" element={<Follow />} />

          <Route exact path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
