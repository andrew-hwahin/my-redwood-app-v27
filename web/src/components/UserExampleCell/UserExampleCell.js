import UserExample from 'src/components/UserExample'

export const QUERY = gql`
  query FIND_USER_EXAMPLE_BY_ID($id: Int!) {
    userExample: userExample(id: $id) {
      id
      email
      name
      birthdate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserExample not found</div>

export const Success = ({ userExample }) => {
  return <UserExample userExample={userExample} />
}
