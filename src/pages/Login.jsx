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
    <section className="layer7 spacer w-screen min-h-[95vh] flex flex-row-reverse items-center justify-between px-[15%] py-10 max-[1000px]:px-[7.5%] max-[1000px]:flex-col" id="login">
      <div className="w-1/2 flex flex-col items-center justify-center max-[1000px]:w-full py-10">
        <h1 className="pb-10 text-6xl max-[600px]:text-4xl text-main-dark">
          Log in
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[80%] max-[600px]:w-[90%]"
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full py-3 text-xl text-center bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="password"
            placeholder="Password"
            required
            minLength={6}
            className="w-full py-3 text-xl text-center bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-main-dark text-white text-2xl py-3 rounded-lg hover:bg-second-gray transition"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>

      <div className="w-1/2 flex justify-center max-[1000px]:w-full py-10">
        <img
          src={poolImage}
          alt="pool"
          className="object-cover w-[80%] h-[650px] rounded-3xl max-[600px]:h-[400px]"
        />
      </div>
    </section>
  );
};

export default Login;
