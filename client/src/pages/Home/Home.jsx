import {useEffect, useState} from "react";
import HeroSection from "./components/HeroSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import InfoSection from "./components/InfoSection.jsx";
import NewsSection from "./components/NewsSection.jsx";

const Home = () => {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        const apiUrl = process.env.NODE_ENV === 'development'
            ? '/api/example'  // Proxy in development
            : `${import.meta.env.VITE_API_BASE_URL}/example`;  // Production URL

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
          <div className="bottom-0 text-sm w-full uppercase text-right fixed">{message}</div>
          <HeroSection/>
          <ExperienceSection/>
          <InfoSection/>
          <NewsSection/>
      </>
  )
}

export default Home;