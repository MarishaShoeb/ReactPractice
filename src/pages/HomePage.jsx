import React from 'react'
import Hero from '../components/Hero'
import JobListings from '../components/Joblistings'
import HomeCards from '../components/HomeCards'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
    return (
        <div>
            <Hero />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </div>
    )
}

export default HomePage
