
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Signup from "./pages/signup";
import Login from "./pages/login";
import toast, { Toaster } from 'react-hot-toast';
import AdminPage from "./admin/adminpage";
import LeaserPage from "./leaser/leaser";
import CustomerPage from "./customer/customerpage";
import DealsPage from "./pages/Deals";
import CarOverview from "./pages/carOverview";

// import other pages when ready...

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deals" element={<DealsPage/>} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/adminpage/*" element={<AdminPage/>} />
        <Route path="/leaserpage/*" element={<LeaserPage/>} />
        <Route path="/CustomerPage/*" element={<CustomerPage/>} />
        <Route path="/overview/:carId" element={<CarOverview/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
