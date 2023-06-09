import JobList from './JobList';
// import { jobs } from '../fake-data';
import { getJobs } from '../graphql/queries';
import { useState, useEffect } from 'react';



function JobBoard() {
  const [jobs, setJobs] = useState([])

  // run once, when mounted
  // useState(async () => {
  //   const response = await getJobs()
  //   // console.log(response)
  //   setJobs(response)
  // }, [])

  useState(() => {
    // getJobs().then((jobs) => setJobs(jobs))
    // or
    getJobs().then(setJobs)

  }, [])

  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
