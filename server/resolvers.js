export const resolvers = {
    Query: {
        jobs: async () => [
            {
                id: '1',
                title: 'Developer',
                // description: ''
            },
            {
                id: '2',
                title: 'Analyst',
                description: ''
            }
        ],
    }
}