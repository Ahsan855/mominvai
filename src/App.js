import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import DashBord from "./Components/DashBord/DashBord";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Reviwe from "./Components/Reviwe/Reviwe";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/reviwe" element={<Reviwe />}></Route>
        <Route path="/dashBord" element={<DashBord />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
