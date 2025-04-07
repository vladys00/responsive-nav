import { Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./screens/About/About";
import Work from "./screens/Work/Work";



function App() {
  return (
    <>
    <NavBar/>
    <h1>hello from react :)</h1>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/work" element={<Work/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
