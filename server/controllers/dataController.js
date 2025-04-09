exports.getData = (req, res) => {
    const { type } = req.params;

    const data = {
        event: {
            title: 'Dota 2 Championship',
            description: 'An epic showdown...',
            date: '2025-04-20',
            location: 'Manila Arena',
        },
        news: {
            title: 'New Esports Tournament Announced!',
            description: 'Top teams around the world...',
            date: '2025-04-10',
            author: 'Esports Insider',
        },
    };

    if (data[type]) {
        res.json(data[type]);
    } else {
        res.status(404).json({ message: `No data found for type: ${type}` });
    }
};
