import { useEffect, useState } from "react";

const News = () => {
    const [fileName, setFileName] = useState("");
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        // Set page name
        const path = window.location.pathname;
        const name = path.split("/").pop().split(".")[0];
        setFileName(name);

        // Fetch news data
        const apiUrl = import.meta.env.DEV
            ? '/api/data/news'
            : `${import.meta.env.VITE_API_BASE_URL}/news`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log("News data:", data);
                setNewsData(data);
            })
            .catch((err) => {
                console.error("Failed to fetch news data", err);
            });
    }, []);

    return (
        <>
            <h1 className="text-6xl font-bold text-center mb-4">
                {fileName} page
            </h1>
            {newsData ? (
                <div className="text-center text-lg">
                    <p><strong>Title:</strong> {newsData.title}</p>
                    <p><strong>Description:</strong> {newsData.description}</p>
                    <p><strong>Date:</strong> {newsData.date}</p>
                    <p><strong>Author:</strong> {newsData.author}</p>
                </div>
            ) : (
                <p className="text-center">Loading news data...</p>
            )}
        </>
    );
};

export default News;
