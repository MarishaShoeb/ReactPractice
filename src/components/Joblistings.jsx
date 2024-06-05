import React from 'react'
import jobs from "../jobs.json"
import JobListing from './JobListing'

const Joblistings = ({ isHome = false }) => {

    let jobListings = isHome ? jobs.slice(0, 3) : jobs;
    return (
        <div className='m-2'>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Browse Jobs" : "Recent Jobs"}                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <!-- Job Listing 1 --> */}

                        {jobListings.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Joblistings
// passing a key as a prop is important for an array or object, otherwise it'll show an error in console
// a key helps the browser to uniquely identify every object.