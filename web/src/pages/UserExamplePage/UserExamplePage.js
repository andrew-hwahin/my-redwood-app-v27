import UserExamplesLayout from 'src/layouts/UserExamplesLayout'
import UserExampleCell from 'src/components/UserExampleCell'

const UserExamplePage = ({ id }) => {
  return (
    <UserExamplesLayout>
      <UserExampleCell id={id} />
    </UserExamplesLayout>
  )
}

export default UserExamplePage
