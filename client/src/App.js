import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Receive from "./pages/Receive";

import Give from "./pages/Give";
import Me from "./pages/Me";

import CreateReceive from "./pages/CreateReceive";
import CreateGive from "./pages/CreateGive";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-200">
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/me" element={<Me />}></Route>

            <Route path="/receive" element={<Receive />}></Route>
            <Route path="/give" element={<Give />}></Route>

            <Route path="/create-receive" element={<CreateReceive />}></Route>

            <Route path="/create-give" element={<CreateGive />}></Route>
          </Routes>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
