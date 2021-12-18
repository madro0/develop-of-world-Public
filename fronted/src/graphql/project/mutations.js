import { gql } from '@apollo/client';

const CREATE_PROJECT = gql`
    mutation CreateProject(
        $name: String!
        $phase: String!
        $startDate: Date!
        $endDate: Date!
        $leader: String!
        $state: String!
        $objectives:[createObjective]
    ){
        createProject(
            name: $name
            phase: $phase
            startDate: $startDate
            endDate: $endDate
            leader: $leader
            state: $state
            objectives: $objectives 
        ){
            _id
        }
    }
`;

export { CREATE_PROJECT };
