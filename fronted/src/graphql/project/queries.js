import { gql } from '@apollo/client';

const PROJECTS = gql`

    query Quey {
        Projects {
            _id
            name
            state
            phase
            startDate
            endDate
            leader {
                name
                lastName
                email
                _id
            }
            objectives {
                _id
                description
                type
            }
        }
    }
`;
 

export { PROJECTS };