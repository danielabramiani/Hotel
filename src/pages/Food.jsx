import React, { useEffect, useState } from "react";
import menuBg from "../assets/images/bg.png";

const Food = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("mains");

  const menuItems = {
    mains: [
      { price: "$20.00", title: "Murgh Tikka Masala", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
      { price: "$35.00", title: "Fish Moilee", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
      { price: "$15.00", title: "Safed Gosht", desc: "Far far away, behind the word mountains, far from the countries Vokalia." }
    ],
    desserts: [
      { price: "$10.00", title: "French Toast Combo", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
      { price: "$8.35", title: "Vegie Omelet", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
      { price: "$22.00", title: "Chocolate Fondant", desc: "Far far away, behind the word mountains, far from the countries Vokalia." }
    ],
    drinks: [
      { price: "$6.00", title: "Fresh Orange Juice", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
      { price: "$9.00", title: "Classic Mojito", desc: "Far far away, behind the word mountains, far from the countries Vokalia." },
      { price: "$12.00", title: "Red Wine Glass", desc: "Far far away, behind the word mountains, far from the countries Vokalia." }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <section className="w-screen min-h-screen flex flex-col items-center justify-center bg-black text-center gap-6" id="food">
        <h1 className="text-5xl font-bold text-[#6E6A8A] max-[600px]:text-3xl">
          Foods Menu
        </h1>
        <p className="text-gray-300 text-sm tracking-wide">
          Tap show menu to see our menu
        </p>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="uppercase bg-[#6E6A8A] py-4 px-10 font-bold text-lg text-[#EDEEF0] rounded-xl hover:bg-[#8E8AA8] transition"
        >
          Show Menu
        </button>
      </section>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="w-full h-full bg-center bg-cover overflow-y-auto animate-menu"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${menuBg})`
            }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl hover:scale-110 transition"
            >
              ✖
            </button>

            <div className="max-w-7xl mx-auto px-6 py-24 text-white text-center">
              <h2 className="text-4xl font-semibold mb-6 max-[600px]:text-2xl">
                Our Restaurant Menu
              </h2>

              <p className="max-w-2xl mx-auto text-gray-300 mb-14 max-[600px]:text-sm">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>

              <div className="flex justify-center gap-12 mb-20 uppercase tracking-widest text-lg max-[600px]:gap-6 max-[600px]:text-sm">
                {["mains", "desserts", "drinks"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 transition ${
                      activeTab === tab
                        ? "border-b-2 border-[#6E6A8A] text-[#6E6A8A]"
                        : "text-gray-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div key={activeTab} className="grid grid-cols-2 gap-16 max-[900px]:grid-cols-1 animate-tab">
                {menuItems[activeTab].map((item, index) => (
                  <div key={index} className="text-left max-[900px]:text-center">
                    <span className="text-[#6E6A8A] font-bold text-lg">
                      {item.price}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mt-3 max-w-md max-[900px]:mx-auto">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Food;
