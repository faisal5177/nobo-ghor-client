import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ServiceBook = ({ onClose }) => {
    const service = useLoaderData();
    const navigate = useNavigate();

    if (!service) {
        return <div>Loading service details...</div>;
    }

    const { _id, service_name, service_image, price, service_provider } = service;
    const { name: provider_name, email: provider_email } = service_provider || {};

    const currentUser = {
        name: "John Doe",
        email: "johndoe@example.com"
    };

    const [bookingDetails, setBookingDetails] = useState({
        serviceDate: "",
        specialInstructions: [],
    });

    const handleChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    };

    const problemOptions = [
        "Leaking pipe",
        "Need electrical repair",
        "Roof leakage needs fixing",
        "Door or window repair needed",
        "Painting and coloring work required",
        "Furniture needs fixing",
    ];

    const handleProblemChange = (e) => {
        const { value, checked } = e.target;
        setBookingDetails((prev) => ({
            ...prev,
            specialInstructions: checked
                ? [...prev.specialInstructions, value]
                : prev.specialInstructions.filter((item) => item !== value),
        }));
    };

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
            serviceStatus: bookingDetails.specialInstructions.join(", ") || "No problems selected"
        };

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                alert("Booking Successful!");
                onClose();
                navigate("/booked-services");  
            }
        })
        .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">Book Service</h2>
                <div className="space-y-2">
                    <p><strong>Service:</strong> {service_name}</p>
                    <p><strong>Provider:</strong> {provider_name} ({provider_email})</p>
                    <p><strong>User:</strong> {currentUser.name} ({currentUser.email})</p>
                    <p><strong>Price:</strong> ${price}</p>
                </div>

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
                    <label className="block text-sm font-medium">Select Problems</label>
                    <div className="border p-2 w-full rounded bg-gray-100">
                        {problemOptions.map((problem, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={`problem-${index}`}
                                    value={problem}
                                    checked={bookingDetails.specialInstructions.includes(problem)}
                                    onChange={handleProblemChange}
                                    className="mr-2"
                                />
                                <label htmlFor={`problem-${index}`}>{problem}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end mt-4">
                    <button className="btn btn-secondary mr-2" onClick={() => navigate("/")}>Cancel</button> 
                    <button className="btn btn-primary" onClick={handleBooking}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBook;
