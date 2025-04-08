import { useEffect, useState } from 'react'
import './styles/App.scss'

function App() {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        const apiUrl = process.env.NODE_ENV === 'development'
            ? '/api/example'  // Proxy in development
            : 'https://alanoliveros-fullstack.onrender.com/api/example';  // Production URL

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setMessage(data.message)
            })
            .catch(err => {
                console.error('Error fetching from backend:', err)
                setMessage('Failed to fetch data from backend.')
            })
    }, [])

    return (
        <>
            <h1 className="flex items-center justify-center min-h-screen text-6xl font-bold text-center">{message}</h1>
        </>
    )
}

export default App
