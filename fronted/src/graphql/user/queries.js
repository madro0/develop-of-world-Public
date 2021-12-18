import { gql } from '@apollo/client';

const GET_USERS = gql`

    query Query{
        Users {
            _id
            name
            lastName
            email
            state
            role
        }
    }
`;

const GET_USER = gql`
    query User($_id: String!){
        User(_id:$_id){
            _id
            name
            lastName
            email
            state
            role
        }
    }
`

export{ 
    GET_USERS,
    GET_USER
}