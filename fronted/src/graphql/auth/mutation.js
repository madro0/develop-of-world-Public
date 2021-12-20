import { gql } from '@apollo/client';

const LOGIN = gql`
    mutation Login(
        $email: String, 
        $password: String
    ) {
        login(
            email: $email, 
            password: $password
        ) {
            token
            ok
        }
    }
`;

export { LOGIN}