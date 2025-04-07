import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./screens/About/About";
import Work from "./screens/Work/Work";

function App() {
  return (
    <>
      <NavBar />
      <main>
      <h1>This is the main page</h1>
      <div>
        sdfsdf
        
      </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
