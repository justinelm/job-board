import { Job, Company } from './db.js'

export const resolvers = {
    Query: {
        jobs: () => Job.findAll()
    },

    Job: {
        //parent obj, 
        // company: (job) => {
        //     console.log('job', job)
        //     return Company.findById(companyId)
        //     return {
        //         id: 'fake id',
        //         name: 'Fake Company',
        //         description: 'Fake description'
        //     }
        // }
        company: (job) => Company.findById(job.companyId)
    }
}