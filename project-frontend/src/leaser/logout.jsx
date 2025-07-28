import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear localStorage or session
    // localStorage.removeItem("token");
    
    // Redirect to homepage
    navigate("/");
  };

  return (
    <div className="bg-white p-8 shadow rounded-lg text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-2">Logout</h2>
      <p className="mb-4">Are you sure you want to logout?</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Confirm Logout
      </button>
    </div>
  );
}
