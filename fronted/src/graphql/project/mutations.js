import { gql } from '@apollo/client';

const CREATE_PROJECT = gql`
    mutation CreateProject(
        $name: String!, 
        $startDate: Date!, 
        $endDate: Date!, 
        $leader: String!, 
        $phase: Enum_PhaseProyect!, 
        $state: Enum_StateProyect!
    ){
        createProject(
            name: $name, 
            startDate: $startDate, 
            endDate: $endDate, 
            leader: $leader, 
            phase: $phase, 
            state: $state
        ){
            _id
        }
    }
`;

const DELETE_PROJECT = gql`
    mutation Mutation($id: String) {
        deleteProject(_id: $id) {
            _id
            name
        }
    }
`;



export { CREATE_PROJECT,DELETE_PROJECT };
