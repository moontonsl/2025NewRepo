import { useEffect, useState } from "react";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const apiUrl = import.meta.env.DEV
            ? "/api/data/event"
            : `${import.meta.env.VITE_API_BASE_URL}/data/events`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log("All event data:", data);
                setEvents(data);
            })
            .catch((err) => {
                console.error("Failed to fetch events", err);
            });
    }, []);

    return (
        <div className="min-h-screen bg-black p-8">
            <h1 className="text-5xl font-bold text-left ml-22 mb-12">Events</h1>

            {events.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-gray-400/50 transition duration-300"
                        >
                            {/* Logo */}
                            {event.event_logo && (
                                <div className="bg-gray-900 flex items-center justify-center h-48 p-6">
                                    <img
                                        src={`https://mslphdatasheet.site/MSLEventsImages/${event.event_logo}`}
                                        alt={`${event.event_title} Logo`}
                                        className="max-h-full object-contain"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-4">
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-white">{event.event_title}</h2>
                                    <p className="text-gray-400 italic mt-2">{event.event_subtitle}</p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    <span className="px-4 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
                                        {event.event_state}
                                    </span>
                                    <span className="px-4 py-1 text-sm bg-gray-700 text-gray-300 rounded-full">
                                        {event.event_name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-96">
                    <p className="text-white text-xl animate-pulse">Loading events...</p>
                </div>
            )}
        </div>
    );
};

export default Events;
