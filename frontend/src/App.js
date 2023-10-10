import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './views/HomePage'
import About from "./views/About";
import BlogPostList from "./views/BlogPostList";
import BlogPost from "./views/BlogPost";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
     <Navbar />
     <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/blogpostlist" element={<BlogPostList/>}/>
        <Route path = "/blogpost/:blogname" element={<BlogPost/>}/>     
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
