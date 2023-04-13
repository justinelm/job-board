import { request, gql } from 'graphql-request'

const GRAPHQL_URL = 'http://localhost:9000/graphql'

async function getJobs() {
    const query = gql`
        query {
            jobs {
                id
                title
                description
                company {
                    name
                    description
                }
            }
        }
    `
    const data = await request(GRAPHQL_URL, query)
    console.log('data')
}