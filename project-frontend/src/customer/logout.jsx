import { useNavigate } from "react-router-dom";

export function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    
    // Redirect to homepage
    navigate("/");
  };

  return (
    <div className="bg-white p-8 shadow-2xl rounded-2xl text-center border border-slate-100">
      {/* Elite Drive Branding */}
      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <span className="text-2xl font-bold text-white">ED</span>
      </div>
      
      <h2 className="text-3xl font-bold text-red-600 mb-2">Logout</h2>
      <p className="text-slate-600 mb-6">Are you sure you want to logout from your Elite Drive account?</p>
      
      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
      >
        <span className="flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Confirm Logout</span>
        </span>
      </button>
    </div>
  );
}