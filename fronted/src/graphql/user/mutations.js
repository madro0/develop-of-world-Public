import {gql} from '@apollo/client';

const   UPDATE_USER = gql`
    mutation UpdateUser(
        $_id: String!
        $name: String!
        $lastName: String!
        $email: String!
        $state: Enum_StateUser!
    ){
        updateUser(
            _id: $_id
            name: $name
            lastName: $lastName
            email: $email
            state: $state 
        ){
            _id
            name
            lastName
            email
            state
            role
        }
    }
`;

const UPDATE_PROFILE = gql`

    mutation UpdateProfile($_id: String!, $field: updateFieldProfile!){
        updateProfile(_id: $_id, field: $field){
            _id
            name
            lastName
        }
    }
`

export{
    UPDATE_USER,
    UPDATE_PROFILE
};