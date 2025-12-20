import React, { useState } from "react";
import roomImage from "../assets/images/hotel-second.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 800);
  };

  return (
    <section className="layer7 spacer w-screen min-h-[95vh] flex items-center justify-between px-[15%] py-10 max-[1000px]:px-[7.5%] max-[1000px]:flex-col" id="register">
      <div className="w-1/2 flex flex-col justify-center max-[1000px]:w-full py-10">
        <h1 className="pb-10 text-6xl max-[600px]:text-4xl text-main-dark">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[80%] max-[600px]:w-[90%]"
        >
          <input
            type="text"
            placeholder="Full name"
            required
            className="w-full py-3 text-xl bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="number"
            placeholder="Age"
            min="18"
            required
            className="w-full py-3 text-xl bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full py-3 text-xl bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <input
            type="password"
            placeholder="Password"
            minLength={6}
            required
            className="w-full py-3 text-xl bg-transparent border-b-2 border-second-gray focus:outline-none focus:border-main-dark"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-main-dark text-white text-2xl py-3 rounded-lg hover:bg-second-gray transition"
          >
            {loading ? "Creating account..." : "Register"}
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-center text-lg cursor-pointer text-main-dark underline"
          >
            Already have an account? Log in
          </p>
        </form>
      </div>

      <div className="w-1/2 flex justify-center max-[1000px]:w-full py-10">
        <img
          src={roomImage}
          alt="room"
          className="object-cover w-[80%] h-[650px] rounded-3xl max-[600px]:h-[400px]"
        />
      </div>
    </section>
  );
};

export default Register;
