import React, { useState } from "react";

const BookNow = () => {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    room: "",
    view: "",
    startDate: "",
    endDate: ""
  });
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(form.startDate) >= new Date(form.endDate)) {
      setError("Start date must be before end date");
      return;
    }

    setError("");

    if (editIndex !== null) {
      const updated = [...bookings];
      updated[editIndex] = form;
      setBookings(updated);
      setEditIndex(null);
    } else {
      setBookings([...bookings, form]);
    }

    setForm({ room: "", view: "", startDate: "", endDate: "" });
  };

  const handleEdit = (index) => {
    setForm(bookings[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setBookings(bookings.filter((_, i) => i !== index));
  };

  return (
    <section className="min-h-screen bg-gray-300 px-[15%] py-20 max-[1000px]:px-[7.5%]" id="book">
      <h1 className="text-6xl font-bold text-center text-[#191D21] mb-20 max-[600px]:text-4xl">
        Book Your Stay
      </h1>

      <div className="flex gap-16 max-[1000px]:flex-col">
        <div className="w-1/2 bg-[#EDEEF0] rounded-2xl p-10 max-[1000px]:w-full">
          <h2 className="text-3xl font-semibold mb-8 text-[#191D21]">
            Reservation Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <select
              value={form.room}
              onChange={(e) => setForm({ ...form, room: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-white text-[#191D21] focus:ring-2 focus:ring-[#6E6A8A]"
            >
              <option value="">Select room</option>
              <option>Basic</option>
              <option>Couple</option>
              <option>Business</option>
              <option>Luxury</option>
            </select>

            <select
              value={form.view}
              onChange={(e) => setForm({ ...form, view: e.target.value })}
              required
              className="w-full p-3 rounded-lg bg-white text-[#191D21] focus:ring-2 focus:ring-[#6E6A8A]"
            >
              <option value="">Select view</option>
              <option>Sea View</option>
              <option>Mountain View</option>
            </select>

            <input
              type="date"
              value={form.startDate}
              onChange={(e) =>
                setForm({ ...form, startDate: e.target.value })
              }
              required
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#6E6A8A]"
            />

            <input
              type="date"
              value={form.endDate}
              onChange={(e) =>
                setForm({ ...form, endDate: e.target.value })
              }
              required
              className="w-full p-3 rounded-lg focus:ring-2 focus:ring-[#6E6A8A]"
            />

            {error && (
              <p className="text-red-500 font-semibold">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[#6E6A8A] text-[#EDEEF0] text-xl font-semibold rounded-xl hover:bg-[#5c5878] transition"
            >
              {editIndex !== null ? "Update Booking" : "Confirm Booking"}
            </button>
          </form>
        </div>

        <div className="w-1/2 max-[1000px]:w-full">
          <h2 className="text-3xl font-semibold mb-8 text-[#191D21]">
            Your Bookings
          </h2>

          {bookings.length === 0 && (
            <p className="text-[#636363] text-lg">
              No bookings yet.
            </p>
          )}

          <div className="space-y-6">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold text-xl text-[#191D21]">
                    {booking.room}
                  </p>
                  <p className="text-[#636363]">{booking.view}</p>
                  <p className="text-sm text-[#636363]">
                    {booking.startDate} → {booking.endDate}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-[#6E6A8A] font-semibold hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;
