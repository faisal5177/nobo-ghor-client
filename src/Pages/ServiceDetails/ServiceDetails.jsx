import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal"; // ✅ Fix Import Path

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, service_name, service_description, service_image, price, service_provider } = service;
    const { name: provider_name, image: provider_image, email: provider_email, location } = service_provider;

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                {/* Service Image */}
                <img className="w-full h-64 object-cover" src={service_image} alt={service_name} />

                {/* Service Details */}
                <div className="p-6">
                    <h2 className="text-2xl font-semibold">{service_name}</h2>
                    <p className="text-gray-600 mt-2">{service_description}</p>
                    
                    {/* Service Provider */}
                    <div className="flex items-center mt-4">
                        <img className="w-12 h-12 rounded-full border" src={provider_image} alt={provider_name} />
                        <div className="ml-3">
                            <p className="text-lg font-semibold">{provider_name}</p>
                            <p className="text-gray-500 text-sm">{location}</p>
                        </div>
                    </div>

                    {/* Price & Booking Button */}
                    <div className="flex justify-between items-center mt-6">
                        <p className="text-xl font-bold text-primary">${price}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {isModalOpen && <BookingModal service={service} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default ServiceDetails;