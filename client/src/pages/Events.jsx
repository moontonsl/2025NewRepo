import { useEffect, useState } from "react";

const Events = () => {
    const [fileName, setFileName] = useState("");
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        // Set page name
        const path = window.location.pathname;
        const name = path.split("/").pop().split(".")[0];
        setFileName(name);

        // Fetch event data
        const apiUrl = import.meta.env.DEV
            ? '/api/data/event'
            : `${import.meta.env.VITE_API_BASE_URL}/events`;




        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log("Event data:", data);
                setEventData(data);
            })
            .catch((err) => {
                console.error("Failed to fetch event data", err);
            });
    }, []);

    return (
        <>
            <h1 className="text-6xl font-bold text-center mb-4">
                {fileName} page
            </h1>
            {eventData ? (
                <div className="text-center text-lg">
                    <p><strong>Title:</strong> {eventData.title}</p>
                    <p><strong>Description:</strong> {eventData.description}</p>
                    <p><strong>Date:</strong> {eventData.date}</p>
                    <p><strong>Location:</strong> {eventData.location}</p>
                </div>
            ) : (
                <p className="text-center">Loading event data...</p>
            )}
        </>
    );
};

export default Events;
