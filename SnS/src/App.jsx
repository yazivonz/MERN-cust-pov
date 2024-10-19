import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Products from "./components/Product/Products";
import Feedbacks from "./components/Feedbacks";
import Cart from "./components/Cart/Cart";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Admin/Dashboard";
import ManageUsers from "./components/Admin/ManageUsers";
import AdminSidebar from "./components/Admin/AdminSidebar";
import ProtectedRoute from "./components/Route/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/products" element={<Products />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>

        {/* Admin Routes with Sidebar Layout */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute isAuthenticated={true}> {/* Replace with actual auth logic */}
              <div className="flex min-h-screen">
                <AdminSidebar />
                <div className="flex-grow p-4">
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="users" element={<ManageUsers />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

// Custom layout for user routes to include the Navbar and Footer
const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Outlet /> {/* This will render the matched child route */}
      {!isAdminRoute && <Footer />} {/* Render Footer conditionally */}
    </>
  );
};

export default App;
