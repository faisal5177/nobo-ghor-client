import React, { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const BookedServices = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUserEmail = "johndoe@example.com";

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?user_email=${currentUserEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  }, [currentUserEmail]);

  const handleDelete = (bookingId) => {
    fetch(`http://localhost:5000/bookings/${bookingId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          // Remove the deleted booking from the state to reflect on the UI
          setBookings((prevBookings) =>
            prevBookings.filter((booking) => booking._id !== bookingId)
          );
          alert("Booking deleted successfully!");
        }
      })
      .catch((error) => console.error("Error deleting booking:", error));
  };

  if (loading) {
    return <div>Loading booked services...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">My Booked Services</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No booked services found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking) => (
            <div key={booking._id} className="border p-4 rounded-lg shadow-md">
              <img
                src={booking.service_image}
                alt={booking.service_name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{booking.service_name}</h3>
              <p>
                <strong>Provider:</strong> {booking.provider_name}
              </p>
              <p>
                <strong>Date:</strong> {booking.serviceDate}
              </p>
              <p>
                <strong>Problems:</strong>{" "}
                {booking.specialInstructions.length > 0
                  ? booking.specialInstructions.join(", ")
                  : "No problems selected"}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      booking.serviceStatus === "pending"
                        ? "bg-yellow-600"
                        : "bg-green-600"
                    }`}
                  >
                    {booking.serviceStatus}
                  </span>
                </p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="text-red-600 hover:text-red-800 mt-2 flex items-center"
                >
                  <RiDeleteBin5Fill className="mr-2 -mt-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedServices;
