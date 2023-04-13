import { Job, Company } from './db.js'

export const resolvers = {
    Query: {
        //parent, arguments
        // convention where parameters with underscores are unused
        job: (_root, {id}) => Job.findById(id),
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
        company: ({companyId}) => Company.findById(companyId)
    }
}