exports.getData = (req, res) => {
    const { type } = req.params;

    const data = {
        event: [
            {
                title: 'Frontend & Backend Connection Test #1',
                description: 'This event entry confirms that your React frontend and Express backend are successfully connected.',
                date: '2025-04-09',
                location: 'localhost / Vercel + Render',
                prizePool: 'N/A',
                teams: ['Client', 'Server'],
                organizer: 'Alan Dev'
            },
            {
                title: 'Frontend & Backend Connection Test #2',
                description: 'This is the second test to show dynamic content rendering from the server to the frontend.',
                date: '2025-04-09',
                location: 'Your Fullstack Project',
                prizePool: 'Knowledge Gained',
                teams: ['React', 'Express'],
                organizer: 'Alan Dev'
            }
        ],

        news: [
            {
                title: 'Testing Client & Server Communication',
                description: 'If you can read this on your News page, then data fetching from backend is working!',
                date: '2025-04-09',
                author: 'System Test',
                link: 'https://moontonslph.org/'
            },
            {
                title: 'Second Test News Entry',
                description: 'This confirms that multiple entries render correctly on the frontend.',
                date: '2025-04-09',
                author: 'System Test',
                link: 'https://moontonslph.org/'
            },
        ]

    };

    if (data[type]) {
        res.json(data[type]);
    } else {
        res.status(404).json({ message: `No data found for type: ${type}` });
    }
};
