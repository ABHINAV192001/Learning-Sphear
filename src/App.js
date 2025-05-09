import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./files/Header_files";
import Home from "./files/Home";
import Courses from "./files/Courses";
import Login from "./files/Login";
import Footer from "./files/footer";
import SignUp from "./files/SignUp";
import { UserProvider } from './files/UserContext'; // Context wrapper

function App() {
  return (
    <UserProvider> {/* Wrap entire app inside UserProvider */}
      <Router>
        <div className="App">
          <Header header='Learning Sphear' Home='Home' about='About' cour='Courses' login='Log-in' />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home Page */}
            <Route path="/Courses" element={<Courses />} /> {/* Courses Page */}
            <Route path="/login" element={<Login />} /> {/* Login Page */}
            <Route path="/Signup" element={<SignUp />} /> {/* Sign Up Page */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
