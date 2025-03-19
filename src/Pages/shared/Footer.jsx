import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-gray-500 text-white  py-8">
            <div className="container mx-auto px-8">
                {/* Country List */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-8 mb-6">
                    <div>
                        <h3 className="font-bold text-xl">Bangladesh</h3>
                        <div className="divider mx-auto -mt-[2px]"></div>
                        <ul className="lg:flex gap-10">
                            <li className="hover:underline text-gray-300 hover:text-white transition">Dhaka</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">Chattogram</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">Khulna</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">Rajshahi</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">Sylhet</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">Barishal</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">Rangpur</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">International</h3>
                        <div className="divider mx-auto -mt-[2px]"></div>
                        <ul className="lg:flex gap-10">
                            <li className="hover:underline text-gray-300 hover:text-white transition">Canada</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">United Kingdom</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">United Arab Emirates</li>
                            <li className="hover:underline text-gray-300 hover:text-white transition">South Africa</li>
                        </ul>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 border-t border-gray-700 pt-4">
                    <ul>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Cancellation Policy</a></li>
                    </ul>
                    <ul>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">FAQ</a></li>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Blog</a></li>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Services</a></li>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Shopping</a></li>
                    </ul>
                    <ul>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Nobo Ghor Rewards</a></li>
                        <li><a href="#" className="hover:underline text-gray-300 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Footer Branding & Social Media */}
                <div className="flex flex-col md:flex-row items-center justify-center border-t border-gray-700 pt-4">
                    {/* Left Side: Logo & Description */}
                    <div className="flex flex-col items-center text-center md:w-1/2 md:pr-6">
                        <div className="bg-white rounded-full mb-3">
                            <img src='https://i.ibb.co.com/x8F3rnJ4/nobo-Ghor-Logo.png' alt="Nobo Ghor" className=" h-20 mb-3" />
                        </div>                    
                        <p className="text-sm max-w-md text-gray-200 hover:text-white transition">
                            Nobo Ghor connects you to experts around you for Home Maintenance and Repairs, Utility, Lifestyle, Health, Beauty, Travel, and other local services, and also brings Local Shopping, Deals, and Events to you, right where you are, through an easy-to-use platform. Schedule services as per your convenience, pay online or by cash, get a warranty on services, and avail cashbacks and discounts through our rewards program. <strong>Uncomplicate Life!</strong>
                        </p>
                    </div>

                    {/* Divider in Middle */}
                    <div className="hidden md:block w-px h-60 bg-gray-900"></div> {/* Vertical Divider for Desktop */}
                    <div className="md:hidden my-4 border-t border-gray-500 w-3/4"></div> {/* Horizontal Divider for Mobile */}

                    {/* Right Side: Social Media */}
                    <div className="flex flex-col items-center md:w-1/2 md:pl-6">
                        <h2 className="font-bold mb-10 text-xl mb-2">Follow Us</h2>
                        <div className="flex space-x-10">
                            <a href="#" className="text-3xl text-gray-400 hover:text-white transition"><FaSquareFacebook /></a>
                            <a href="#" className="text-3xl text-gray-400 hover:text-white transition"><IoLogoTwitter /></a>
                            <a href="#" className="text-3xl text-gray-400 hover:text-white transition"><FaInstagram /></a>
                            <a href="#" className="text-3xl text-gray-400 hover:text-white transition"><AiFillYoutube /></a>
                        </div>
                    </div>
                </div>

            </div>
        </footer >
    );
};

export default Footer;
