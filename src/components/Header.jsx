import { Link } from "react-router-dom";

export default function Header({ isLoggedIn, setIsLoggedIn,user }) {

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const role = localStorage.getItem("role");

  return (
    <header className="bg-gradient-to-r from-kerala-dark to-kerala-green text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="font-bold text-lg">Kerala Lottery</h1>

        <nav className="flex gap-6 items-center">

          <Link to="/">Home</Link>
          <a href="#">Results</a>
          <a href="#">Types</a>
          <a href="#">About</a>

          {!isLoggedIn ? (
            <>
              <Link to="/login">Login</Link>
              <Link className="bg-kerala-gold text-kerala-dark px-4 py-2 rounded-lg" to="/register">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-kerala-gold text-kerala-dark px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
{role === "admin" && (
  <Link to="/admin/dashboard">Admin Panel</Link>
)}
        </nav>
      </div>
    </header>
  );
}