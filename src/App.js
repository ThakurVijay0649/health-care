import "./Styles/App.scss"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Navigate to={"/s"} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
