import {useEffect, useState} from "react";

const Home = () => {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        const apiUrl = process.env.NODE_ENV === 'development'
            ? '/api/example'  // Proxy in development
            : 'https://something.com/api/example';  // Production URL

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log('Received message from backend:', data.message)
                setMessage(data.message)
            })
            .catch(err => {
                console.error('Error fetching from backend:', err)
                setMessage('Failed to fetch data from backend.')
            })
    }, [])

  return (
      <>
          <h1 className="flex items-center justify-center text-6xl font-bold text-center">{message}</h1>
      </>
  )
}

export default Home;