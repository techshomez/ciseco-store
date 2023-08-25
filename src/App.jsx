import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar";
import HomePage from "./pages/home";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
