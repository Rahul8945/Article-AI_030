import { Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    // <Router>
      <AuthProvider>
        <Navbar />
        <AllRoutes />
      </AuthProvider>
    // </Router>
  );
};

export default App;
