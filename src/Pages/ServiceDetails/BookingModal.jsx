import React, { useState } from "react";

const BookingModal = ({ service, onClose }) => {
    const { _id, service_name, service_image, price, service_provider } = service;
    const { name: provider_name, email: provider_email } = service_provider;

    // Dummy user details (Replace with actual logged-in user)
    const currentUser = {
        name: "John Doe",
        email: "johndoe@example.com"
    };

    // State for editable fields
    const [bookingDetails, setBookingDetails] = useState({
        serviceDate: "",
        specialInstructions: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    };

    // Handle booking submission
    const handleBooking = () => {
        const bookingData = {
            serviceId: _id,
            service_name,
            service_image,
            provider_email,
            provider_name,
            user_email: currentUser.email,
            user_name: currentUser.name,
            serviceDate: bookingDetails.serviceDate,
            specialInstructions: bookingDetails.specialInstructions,
            price,
            serviceStatus: "pending"
        };

        // Send booking data to the server
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                alert("Booking Successful!");
                onClose(); // Close the modal
            }
        })
        .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Book Service</h2>
                
                {/* Readonly Fields */}
                <div className="space-y-2">
                    <p><strong>Service:</strong> {service_name}</p>
                    <p><strong>Provider:</strong> {provider_name} ({provider_email})</p>
                    <p><strong>User:</strong> {currentUser.name} ({currentUser.email})</p>
                    <p><strong>Price:</strong> ${price}</p>
                </div>

                {/* Editable Fields */}
                <div className="mt-4">
                    <label className="block text-sm font-medium">Service Date</label>
                    <input 
                        type="date" 
                        name="serviceDate"
                        className="border p-2 w-full rounded"
                        value={bookingDetails.serviceDate}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="mt-4">
                    <label className="block text-sm font-medium">Special Instructions</label>
                    <textarea 
                        name="specialInstructions"
                        className="border p-2 w-full rounded"
                        placeholder="Enter any additional details..."
                        value={bookingDetails.specialInstructions}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-4">
                    <button className="btn btn-secondary mr-2" onClick={onClose}>Cancel</button>
                    <button className="btn btn-primary" onClick={handleBooking}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;