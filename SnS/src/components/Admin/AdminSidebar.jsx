import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold">Admin Panel</h2>
      <ul className="mt-4">
        <li>
          <Link to="/admin" className="block py-2">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="block py-2">
            Manage Users
          </Link>
        </li>
        {/* Add more links as necessary */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
