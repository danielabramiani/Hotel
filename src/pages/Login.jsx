import React, { useContext, useEffect, useState } from "react";
import poolImage from "../assets/images/pool.jpg";
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <section
      id="login"
      className="layer7 w-screen min-h-screen flex items-center justify-between px-[15%] py-10
      max-[1000px]:px-[7.5%] max-[900px]:flex-col"
    >
      <div className="w-1/2 max-[900px]:w-full flex justify-center py-6">
        <img
          src={poolImage}
          alt="pool"
          className="w-[85%] max-[900px]:w-[90%] object-cover rounded-3xl
          h-[650px] max-[900px]:h-[450px] max-[600px]:h-[260px]"
        />
      </div>

      <div className="w-1/2 max-[900px]:w-full flex flex-col items-center justify-center py-6">
        <h1 className="text-6xl max-[900px]:text-5xl max-[600px]:text-4xl text-main-dark mb-10">
          Log in
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-[70%] max-[1000px]:w-[80%] max-[600px]:w-full flex flex-col gap-6"
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="py-3 text-lg text-center bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="password"
            placeholder="Password"
            minLength={6}
            required
            className="py-3 text-lg text-center bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-main-dark text-white text-xl py-3 rounded-lg hover:bg-second-gray transition"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
