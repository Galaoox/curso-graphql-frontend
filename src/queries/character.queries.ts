import { gql, DocumentNode } from 'apollo-boost';

export const GET_CHARACTERS: DocumentNode = gql`
    {
        getCharacters {
            _id
            name
            race
            gender

        }
    }
`