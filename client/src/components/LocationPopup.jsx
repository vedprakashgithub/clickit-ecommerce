import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const LocationPopup = ({ setUserLocation, close }) => {
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";  // Replace with your key

    // Detect user's location and extract area + pincode
    const detectLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(
                            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
                        );
                        const data = await response.json();
                        if (data.results.length > 0) {
                            const addressComponents = data.results[0].address_components;
                            let area = "";
                            let pincode = "";

                            addressComponents.forEach((component) => {
                                if (component.types.includes("sublocality_level_1") || component.types.includes("locality")) {
                                    area = component.long_name;
                                }
                                if (component.types.includes("postal_code")) {
                                    pincode = component.long_name;
                                }
                            });

                            const formattedLocation = `${area}, ${pincode}`;
                            setLocation(formattedLocation);
                            setUserLocation(formattedLocation);
                            close();
                        } else {
                            setError("Location not found. Please search manually.");
                        }
                    } catch (error) {
                        setError("Error fetching location details.");
                    }
                },
                () => {
                    setError("Failed to detect location. Please search manually.");
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    // Handle manual search input using Google Places API
    const handleManualInput = async (e) => {
        setLocation(e.target.value);
        if (e.target.value.length > 2) {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=${GOOGLE_MAPS_API_KEY}&components=country:IN`
                );
                const data = await response.json();
                setSuggestions(data.predictions);
            } catch (error) {
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    // Handle location selection from dropdown
    const selectLocation = async (placeId) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`
            );
            const data = await response.json();
            if (data.result) {
                const addressComponents = data.result.address_components;
                let area = "";
                let pincode = "";

                addressComponents.forEach((component) => {
                    if (component.types.includes("sublocality_level_1") || component.types.includes("locality")) {
                        area = component.long_name;
                    }
                    if (component.types.includes("postal_code")) {
                        pincode = component.long_name;
                    }
                });

                const formattedLocation = `${area}, ${pincode}`;
                setLocation(formattedLocation);
                setUserLocation(formattedLocation);
                setSuggestions([]);
                close();
            }
        } catch (error) {
            setError("Error selecting location.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Select Location</h2>
                    <button onClick={close}><IoMdClose size={24} /></button>
                </div>
                <button 
                    onClick={detectLocation} 
                    className="w-full bg-green-600 text-white py-2 rounded mb-2">
                    Detect My Location
                </button>
                <input 
                    type="text" 
                    value={location} 
                    onChange={handleManualInput} 
                    placeholder="Search location manually..." 
                    className="w-full border p-2 rounded mb-2"
                />
                {suggestions.length > 0 && (
                    <ul className="border rounded shadow-md max-h-40 overflow-y-auto">
                        {suggestions.map((suggestion) => (
                            <li 
                                key={suggestion.place_id} 
                                className="p-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => selectLocation(suggestion.place_id)}
                            >
                                {suggestion.description}
                            </li>
                        ))}
                    </ul>
                )}
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button 
                    onClick={() => setUserLocation(location)} 
                    className="w-full bg-blue-600 text-white py-2 rounded mt-2">
                    Confirm Location
                </button>
            </div>
        </div>
    );
};

export default LocationPopup;
