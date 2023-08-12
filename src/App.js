import "./index.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogdetails/:id" element={<BlogDetails/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
